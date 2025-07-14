import { useState, useEffect } from "react";
import { getCategoriesEvent } from '../../apis/production'
import { createProductEvent } from '../../apis/sale'

function SalePage() {
    const [previewImage, setPreviewImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    // 폼 데이터 상태
    const [formData, setFormData] = useState({
        name: '',
        category_idx: '',
        explain: '',
        weight: '',
        price: '',
        expiration_year: '',
        expiration_month: '',
        expiration_day: '',
        image: null
    });

    // 컴포넌트 마운트 시 카테고리 목록 가져오기
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const categoryData = await getCategoriesEvent();
                setCategories(categoryData);
                setError(null);
            } catch (err) {
                console.error("카테고리 조회 실패:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // 파일이 이미지인지
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                // 파일 읽기 완료 시 실행되는 콜백
                reader.onload = (e) => {
                    setPreviewImage(e.target.result);
                };
                // 파일을 미리보기할 수 있는 데이터로 변환
                reader.readAsDataURL(file);
                
                // 폼 데이터에 파일 저장
                setFormData(prev => ({
                    ...prev,
                    image: file
                }));
            }
        }
    }

    // 입력값 변경 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setSubmitting(true);
            
            // 유통기한 조합 (YYYY-MM-DD 형식)
            const expiration = `${formData.expiration_year}-${formData.expiration_month.padStart(2, '0')}-${formData.expiration_day.padStart(2, '0')}`;
            
            // API 호출
            const result = await createProductEvent({
                category_idx: formData.category_idx,
                name: formData.name,
                explain: formData.explain,
                weight: formData.weight,
                price: formData.price,
                expiration: expiration,
                image: formData.image
            });

            alert('상품이 성공적으로 등록되었습니다!');
            
            // 폼 초기화
            setFormData({
                name: '',
                category_idx: '',
                explain: '',
                weight: '',
                price: '',
                expiration_year: '',
                expiration_month: '',
                expiration_day: '',
                image: null
            });
            setPreviewImage(null);
            
        } catch (err) {
            console.error("상품 등록 실패:", err);
            alert(err.message || '상품 등록에 실패했습니다.');
        } finally {
            setSubmitting(false);
        }
    };

    return ( 
        <div>
            <div className="flex flex-col items-center">
                <h1 className='text-2xl font-bold m-10'>상품등록</h1>
                <form onSubmit={handleSubmit}>
                    <table className="border-collapse border border-black">
                        <tbody>
                            <tr>
                                <th className="border border-black p-10 whitespace-nowrap bg-primary-400">사진등록</th>
                                <td className="flex items-end p-10 whitespace-nowrap">
                                    <div className="w-48 h-32 bg-gray-100 rounded-sm border flex justify-center items-center">
                                        {previewImage ? (
                                            <img
                                                src={previewImage}
                                                alt="preview"
                                                className="w-full h-full object-cover"
                                            />
                                            ) : (
                                                <span className="text-gray-500">사진</span>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="ml-4 px-2 py-3 cursor-pointer"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">상품명</th>
                                <td className="border border-black pl-4 px-10 py-6 whitespace-nowrap">
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="상품명을 입력하세요" 
                                        className="border px-2 py-3 w-72 placeholder-black focus:placeholder-transparent"
                                        required
                                        minLength={2}
                                        maxLength={30}
                                    />
                                    <span className="text-xs ml-2">※ 2자~30자까지 입력 가능하며, 슬래시(/), 쉼표(,), 마침표(.), 언더바(_), 곱하기(*) 이외의 특수문자 사용 불가</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">카테고리</th>
                                <td className="border border-black pl-4 px-10 py-6 whitespace-nowrap">
                                    <select 
                                        name="category_idx"
                                        value={formData.category_idx}
                                        onChange={handleInputChange}
                                        className="border px-2 py-3 w-72"
                                        required
                                    >
                                        <option value="" disabled>
                                            {loading ? "카테고리 로딩 중..." : "카테고리 선택"}
                                        </option>
                                        {error ? (
                                            <option value="" disabled>카테고리 로딩 실패</option>
                                        ) : (
                                            categories.map((category) => (
                                                <option key={category.category_idx} value={category.category_idx}>
                                                    {category.category_name}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">상품설명</th>
                                <td className="border border-black pl-4 px-10 py-6 whitespace-nowrap">
                                    <textarea 
                                        name="explain"
                                        value={formData.explain}
                                        onChange={handleInputChange}
                                        className="border px-2 py-1 w-full h-96 resize-none"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">무게</th>
                                <td className="border border-black pl-4 px-10 py-6 whitespace-nowrap">
                                    <input 
                                        type="number" 
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                        placeholder="무게" 
                                        className="border px-2 py-3 w-20 focus:placeholder-transparent"
                                        required
                                        min="1"
                                    />
                                    <span className="text-gray-400 ml-3">(g)</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">가격</th>
                                <td className="border border-black pl-4 px-10 py-6 whitespace-nowrap">
                                    <input 
                                        type="number" 
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        placeholder="가격" 
                                        className="border px-2 py-3 w-32 focus:placeholder-transparent"
                                        required
                                        min="1"
                                    />
                                    <span className="text-gray-400 ml-3">원</span>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">유통기한</th>
                                <td className="border border-black pl-4 px-10 py-6 whitespace-nowrap">
                                    <select 
                                        name="expiration_year"
                                        value={formData.expiration_year}
                                        onChange={handleInputChange}
                                        className="border px-2 py-3 w-24"
                                        required
                                    >
                                        <option value="" disabled>년도</option>
                                        <option value="2025">2025년</option>
                                        <option value="2026">2026년</option>
                                        <option value="2027">2027년</option>
                                        <option value="2028">2028년</option>
                                        <option value="2029">2029년</option>
                                    </select>
                                    <span>&nbsp;-&nbsp;</span>
                                    <select 
                                        name="expiration_month"
                                        value={formData.expiration_month}
                                        onChange={handleInputChange}
                                        className="border px-2 py-3 w-20"
                                        required
                                    >
                                        <option value="" disabled>월</option>
                                        <option value="1">1월</option>
                                        <option value="2">2월</option>
                                        <option value="3">3월</option>
                                        <option value="4">4월</option>
                                        <option value="5">5월</option>
                                        <option value="6">6월</option>
                                        <option value="7">7월</option>
                                        <option value="8">8월</option>
                                        <option value="9">9월</option>
                                        <option value="10">10월</option>
                                        <option value="11">11월</option>
                                        <option value="12">12월</option>
                                    </select>
                                    <span>&nbsp;-&nbsp;</span>
                                    <input 
                                        type="number" 
                                        name="expiration_day"
                                        value={formData.expiration_day}
                                        onChange={handleInputChange}
                                        placeholder="일" 
                                        className="border px-2 py-3 w-20 placeholder-black focus:placeholder-transparent"
                                        required
                                        min="1"
                                        max="31"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button 
                        type="submit"
                        disabled={submitting}
                        className="w-96 h-12 mt-5 rounded-lg font-bold border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitting ? '등록 중...' : '등록하기'}
                    </button>
                </form>
            </div>
        </div>
     );
}

export default SalePage;