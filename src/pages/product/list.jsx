import CategoryButton from "../../components/productCategory/categoryButton";
import { useState, useEffect } from "react";
import { getCategoriesEvent, getProductsEvent } from "../../apis/production"; // API 함수들 import
import { API_BASE_URL } from "../../apis/config";
import { useNavigate } from "react-router";

function ProductListPage() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 이미지 URL 생성 함수
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        // 이미 완전한 URL인 경우 그대로 반환
        if (imagePath.startsWith('http')) return imagePath;
        // 상대경로인 경우 API_BASE_URL과 결합
        return `${API_BASE_URL}${imagePath}`;
    };

    // 카테고리 목록 로드
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categoriesData = await getCategoriesEvent();
                setCategories(categoriesData);
            } catch (err) {
                setError(err.message);
            }
        };
        loadCategories();
    }, []);

    // 상품 목록 로드
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const productsData = await getProductsEvent(selectedCategory || null);
                setProducts(productsData);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [selectedCategory]);

    // 상품 상세 페이지로 이동
    const handleProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    // 카테고리 선택 핸들러
    const handleCategorySelect = (categoryIdx) => {
        setSelectedCategory(categoryIdx === selectedCategory ? '' : categoryIdx);
    };

    // 카테고리 이름으로 idx 찾기
    const getCategoryIdx = (categoryName) => {
        const category = categories.find(cat => cat.category_name === categoryName);
        return category ? category.category_idx : null;
    };

    return ( 
        <div>
            <table className="border-collapse border border-black">
                <tbody>
                    <tr>
                        <th className="border border-black p-10 whitespace-nowrap bg-primary-400">카테고리</th>
                        <td className="border border-black">
                            <div className="flex flex-nowrap gap-4 p-4">
                                <CategoryButton 
                                    onClick={() => handleCategorySelect(getCategoryIdx("쌀/잡곡"))}
                                    isSelected={selectedCategory === getCategoryIdx("쌀/잡곡")}
                                >쌀/잡곡</CategoryButton>
                                <CategoryButton
                                    onClick={() => handleCategorySelect(getCategoryIdx("과일류"))}
                                    isSelected={selectedCategory === getCategoryIdx("과일류")}
                                >과일류</CategoryButton>
                                <CategoryButton
                                    onClick={() => handleCategorySelect(getCategoryIdx("채소류"))}
                                    isSelected={selectedCategory === getCategoryIdx("채소류")}
                                >채소류</CategoryButton>
                                <CategoryButton
                                    onClick={() => handleCategorySelect(getCategoryIdx("축산물"))}
                                    isSelected={selectedCategory === getCategoryIdx("축산물")}
                                >축산물</CategoryButton>
                                <CategoryButton
                                    onClick={() => handleCategorySelect(getCategoryIdx("수산물"))}
                                    isSelected={selectedCategory === getCategoryIdx("수산물")}
                                >수산물</CategoryButton>
                                <CategoryButton
                                    onClick={() => handleCategorySelect(getCategoryIdx("꿀/홍삼"))}
                                    isSelected={selectedCategory === getCategoryIdx("꿀/홍삼")}
                                >꿀/홍삼</CategoryButton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="border border-black p-4 whitespace-nowrap bg-primary-400">가격</th>
                        <td className="flex items-center p-4 gap-3">
                            <input className="pl-2 border border-black w-24 h-8"></input>
                            <span>-</span>
                            <input className="pl-2 border border-black w-24 h-8"></input>
                            <button className="border border-black w-14 h-8">적용</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* 상품 목록 섹션 */}
            <div className="mt-8">
                {error && (
                    <div className="text-red-500 text-center p-4">
                        {error}
                    </div>
                )}
                
                {loading ? (
                    <div className="text-center p-8">
                        <div className="text-lg">상품을 불러오는 중...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div 
                                key={product.idx} 
                                className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => handleProductDetail(product.idx)}
                            >
                                {/* 상품 이미지 */}
                                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                                    {product.image ? (
                                        <img 
                                            src={getImageUrl(product.image)} 
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400" style={{ display: product.image ? 'none' : 'flex' }}>
                                        <span className="text-sm">이미지 없음</span>
                                    </div>
                                </div>
                                
                                {/* 상품 정보 */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-2">{product.explain}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{product.category_name}</span>
                                        <span className="text-sm text-gray-500">{product.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-green-600">
                                            {product.price?.toLocaleString()}원
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            유통기한: {new Date(product.expiration).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* 상세보기 버튼 */}
                                <button 
                                    className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation(); // 카드 클릭 이벤트 방지
                                        handleProductDetail(product.idx);
                                    }}
                                >
                                    상세보기
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                
                {/* 상품이 없을 때 */}
                {!loading && products.length === 0 && !error && (
                    <div className="text-center p-8">
                        <div className="text-lg text-gray-500">등록된 상품이 없습니다.</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductListPage;