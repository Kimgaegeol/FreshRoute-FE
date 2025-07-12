import { useState } from "react";

function SalePage() {
    const [previewImage, setPreviewImage] = useState(null);

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
            }
        }
    }

    return ( 
        <div>
            <div className="flex flex-col items-center">
                <h1 className='text-2xl font-bold m-10'>상품등록</h1>
                <table className="border-collapse border border-black">
                    <thead>
                        <tr>
                            <th className="border border-black px-10 py-10 whitespace-nowrap bg-primary-400">사진등록</th>
                            <td className="flex items-end px-10 py-10 whitespace-nowrap">
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
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">상품명</th>
                            <td className="border border-black pl-4 pr-10 py-6 whitespace-nowrap">
                                <input type="text" placeholder="상품명을 입력하세요" className="border px-2 py-3 w-72 placeholder-black  focus:placeholder-transparent"></input>
                                <span className="text-xs ml-2">※ 2자~30자까지 입력 가능하며, 슬래시(/), 쉼표(,), 마침표(.), 언더바(_), 곱하기(*) 이외의 특수문자 사용 불가</span>
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">카테고리</th>
                            <td className="border border-black pl-4 pr-10 py-6 whitespace-nowrap">
                                <select className="border px-2 py-3 w-72">
                                    <option value="" disabled>카테고리 선택</option>
                                    <option value="rice/grain">쌀/잡곡</option>
                                    <option value="fruits">과일류</option>
                                    <option value="vegetables">채소류</option>
                                    <option value="livestock/fisheries">축산물</option>
                                    <option value="honey/red ginseng">꿀/홍삼</option>
                                    <option value="etc">기타</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">상품설명</th>
                            <td className="border border-black pl-4 pr-10 py-6 whitespace-nowrap">
                                <textarea type="text" className="border px-2 py-1 w-full h-96 resize-none">
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">무게</th>
                            <td className="border border-black pl-4 pr-10 py-6 whitespace-nowrap">
                                <input type="text" placeholder="무게" className="border px-2 py-3 w-20 focus:placeholder-transparent"></input>
                                <span className="text-gray-400 ml-3">(g)</span>
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-black px-10 py-6 whitespace-nowrap bg-primary-400">유통기한</th>
                            <td className="border border-black pl-4 pr-10 py-6 whitespace-nowrap">
                                <select className="border px-2 py-3 w-24">
                                    <option value="" disabled>년도</option>
                                    <option value="2025">2025년</option>
                                    <option value="2026">2026년</option>
                                    <option value="2027">2027년</option>
                                    <option value="2028">2028년</option>
                                    <option value="2029">2029년</option>
                                    <option value="etc">기타</option>
                                </select>
                                <span>&nbsp;-&nbsp;</span>
                                <select className="border px-2 py-3 w-20">
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
                                <input type="text" placeholder="일" className="border px-2 py-3 w-20 placeholder-black focus:placeholder-transparent"></input>
                            </td>
                        </tr>
                    </thead>
                </table>
                <button 
                    className="w-96 h-12 mt-5 rounded-lg font-bold border-2 border-black"
                >등록하기</button>
            </div>
        </div>
     );
}

export default SalePage;

// 이미지, 카테고리, 설명, 무게, 가격, 유통기한