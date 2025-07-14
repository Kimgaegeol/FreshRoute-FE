import { useState, useEffect } from "react";
import { getFarmerSaleListEvent } from "../../../apis/mypage/farmer";
import { API_BASE_URL } from "../../../apis/config";
import { useNavigate } from "react-router-dom";

function FarmerSaleListPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await getFarmerSaleListEvent();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // 이미지 URL 생성 함수
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        return `${API_BASE_URL}${imagePath}`;
    };

    // 카테고리별 필터링
    const filteredProducts = selectedCategory === "all" 
        ? products 
        : products.filter(product => product.category_name === selectedCategory);

    // 고유한 카테고리 목록 추출
    const categories = ["all", ...new Set(products.map(p => p.category_name))];

    // 판매 통계 계산
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, product) => sum + (product.price || 0), 0);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">로딩 중...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return ( 
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">내 판매 상품 관리</h1>
                <button 
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    onClick={() => navigate('/product/sale')}
                >
                    새 상품 등록
                </button>
            </div>

            {/* 판매 통계 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">총 상품 수</h3>
                    <p className="text-2xl font-bold text-green-600">{totalProducts}개</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">총 상품 가치</h3>
                    <p className="text-2xl font-bold text-green-600">{totalValue.toLocaleString()}원</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">평균 가격</h3>
                    <p className="text-2xl font-bold text-green-600">
                        {totalProducts > 0 ? Math.round(totalValue / totalProducts).toLocaleString() : 0}원
                    </p>
                </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                selectedCategory === category
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category === "all" ? "전체" : category}
                        </button>
                    ))}
                </div>
            </div>

            {/* 상품 목록 */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 mb-4">등록된 상품이 없습니다.</p>
                    <button 
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        onClick={() => navigate('/product/sale')}
                    >
                        첫 상품 등록하기
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.product_id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            {/* 상품 이미지 */}
                            <div className="h-48 bg-gray-200 relative">
                                {product.image ? (
                                    <img 
                                        src={getImageUrl(product.image)} 
                                        alt={product.product_name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="w-full h-full flex items-center justify-center text-gray-400" 
                                     style={{ display: product.image ? 'none' : 'flex' }}>
                                    <span className="text-sm">이미지 없음</span>
                                </div>
                                {/* 카테고리 배지 */}
                                <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                                    {product.category_name}
                                </span>
                            </div>

                            {/* 상품 정보 */}
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">{product.product_name}</h3>
                                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.product_description}</p>
                                
                                <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">무게</span>
                                        <span className="font-medium">{product.weight}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">가격</span>
                                        <span className="font-bold text-green-600">{product.price?.toLocaleString()}원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">유통기한</span>
                                        <span className="font-medium">
                                            {new Date(product.expiration).toLocaleDateString('ko-KR')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">등록일</span>
                                        <span className="text-xs text-gray-400">
                                            {new Date(product.created_at).toLocaleDateString('ko-KR')}
                                        </span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FarmerSaleListPage;