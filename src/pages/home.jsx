import { useState, useEffect } from "react";
import { getRandomProductsEvent } from "../apis/home";
import { API_BASE_URL } from "../apis/config";
import MainLayout from "../layouts/main";
import { Outlet, useNavigate } from "react-router";

function HomePage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await getRandomProductsEvent();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        // 이미 완전한 URL인 경우 그대로 반환
        if (imagePath.startsWith('http')) return imagePath;
        // 상대경로인 경우 API_BASE_URL과 결합
        return `${API_BASE_URL}${imagePath}`;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    const calculateDiscountRate = (originalPrice, currentPrice) => {
        if (!originalPrice || originalPrice <= currentPrice) return 0;
        return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
    };

    // 상품 상세 페이지로 이동
    const handleProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div>
            <MainLayout>
                <div className="container mx-auto px-4 py-6">
                    {/* 인기 농수산물 섹션 */}
                    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">인기 농수산물</h2>
                        
                        {loading && (
                            <div className="flex justify-center items-center h-32">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                                <p className="text-red-600">{error}</p>
                            </div>
                        )}

                        {!loading && !error && (
                            <div className="relative">
                                <div className="flex overflow-x-auto gap-4 pb-4">
                                    {products.map((product, index) => (
                                        <div 
                                            key={product.idx} 
                                            className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                                            style={{ minWidth: '180px' }}
                                            onClick={() => handleProductDetail(product.idx)}
                                        >
                                            {/* 순서 번호 */}
                                            <div className="text-sm font-bold text-gray-600 mb-2">
                                                {index + 1}
                                            </div>
                                            
                                            {/* 상품 이미지 */}
                                            <div className="w-full h-32 mb-3 bg-gray-100 rounded-md overflow-hidden">
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
                                                    <span className="text-xs">이미지 없음</span>
                                                </div>
                                            </div>

                                            {/* 할인율 */}
                                            <div className="text-red-500 font-bold text-sm mb-1">
                                                20%
                                            </div>

                                            {/* 상품명 */}
                                            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                                                {product.name}
                                            </h3>

                                            {/* 가격 */}
                                            <div className="text-lg font-bold text-gray-900">
                                                {formatPrice(product.price)}원
                                            </div>

                                            {/* 추가 정보 */}
                                            {product.weight && (
                                                <div className="text-xs text-gray-500 mt-1">
                                                    {product.weight}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* 다음 버튼 */}
                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* 상품 더보기 버튼 */}
                    <div className="text-center">
                        <button 
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                            onClick={() => navigate('/products')}
                        >
                            상품 더보기
                        </button>
                    </div>
                </div>
                
                <Outlet/>
            </MainLayout>
        </div>
    );
}

export default HomePage;