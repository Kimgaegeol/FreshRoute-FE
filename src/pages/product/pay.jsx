import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TestContext } from "../../store/testContext";
import { API_BASE_URL } from "../../apis/config";

function PayPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { account } = useContext(TestContext);
    
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);

    // 이미지 URL 생성 함수
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith("http")) return imagePath;
        return `${API_BASE_URL}${imagePath}`;
    };

    // 배송비 계산 (예시)
    const SHIPPING_COST = 2500;

    // 유통기한 할인 계산 (예시: 유통기한이 5일 이하면 할인)
    const calculateDiscount = (expirationDate, price) => {
        const today = new Date();
        const expiration = new Date(expirationDate);
        const daysDiff = Math.ceil((expiration - today) / (1000 * 60 * 60 * 24));
        
        if (daysDiff <= 5) {
            return Math.floor(price * 0.2); // 20% 할인
        }
        return 0;
    };

    useEffect(() => {
        // location.state에서 상품 정보 가져오기
        if (location.state && location.state.product) {
            const { product, quantity, totalPrice } = location.state;
            const discount = calculateDiscount(product.expiration, totalPrice);
            
            setOrderData({
                product,
                quantity,
                originalPrice: totalPrice,
                discount,
                shippingCost: SHIPPING_COST,
                finalPrice: totalPrice - discount + SHIPPING_COST
            });
        } else {
            // 직접 접근한 경우 메인 페이지로 리다이렉트
            alert("잘못된 접근입니다.");
            navigate('/');
        }
        setLoading(false);
    }, [location.state, navigate]);

    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 돌아가기
    };

    const handlePayment = () => {
        // 결제 처리 로직 구현
        alert("결제 기능은 준비 중입니다.");
    };

    if (loading) {
        return <div className="p-8 text-center">로딩 중...</div>;
    }

    if (!orderData) {
        return <div className="p-8 text-center text-red-500">주문 정보를 불러올 수 없습니다.</div>;
    }

    return ( 
        <div>
            <h1 className='text-2xl font-bold'>주문 / 결제</h1>
            
            {/* 상품 박스 */}
            <div className="flex items-center gap-6 border border-black rounded-lg w-4/5 p-5 mt-5">
                <div className="bg-gray-300 w-40 h-36 rounded-lg overflow-hidden">
                    {orderData.product.image ? (
                        <img
                            src={getImageUrl(orderData.product.image)}
                            alt={orderData.product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            이미지 없음
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl whitespace-nowrap">
                        {orderData.product.name} ({orderData.product.weight})
                    </p>
                    <p className="text-base whitespace-nowrap">
                        {orderData.product.explain}
                    </p>
                    <p className="text-base text-gray-600">
                        수량: {orderData.quantity}개
                    </p>
                    <p className="font-bold text-xl mt-3 whitespace-nowrap">
                        {orderData.originalPrice.toLocaleString()}원
                    </p>
                </div>
            </div>

            {/* 배송지 */}
            <h1 className='text-xl font-bold mt-10'>배송지</h1>
            <div className="flex flex-col mt-5 w-4/5">
                <table>
                    <tbody>
                        <tr className="border-t-2 border-black">
                            <td className="w-20 pt-3">이름</td>
                            <td className="pt-3">{account.userID || "홍길동"}</td>
                        </tr>
                        <tr>
                            <td className="pt-3">연락처</td>
                            <td className="pt-3">010-1234-5678</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3">주소</td>
                            <td className="py-3">(12345) 인천광역시 미추홀구 인하로 100</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 최종 결제 금액 */}
            <h1 className='text-xl font-bold mt-10'>최종 결제 금액</h1>
            <div className="flex flex-col mt-5 w-4/5">
                <table>
                    <tbody>
                        <tr className="border-t-2 border-black">
                            <td className="w-52 pt-3">총 상품 가격</td>
                            <td className="pt-3">{orderData.originalPrice.toLocaleString()}원</td>
                        </tr>
                        {orderData.discount > 0 && (
                            <tr>
                                <td className="pt-3">유통기한 5일 할인</td>
                                <td className="pt-3 text-red-500">-{orderData.discount.toLocaleString()}원</td>
                            </tr>
                        )}
                        <tr>
                            <td className="pt-3">배송비</td>
                            <td className="pt-3">{orderData.shippingCost.toLocaleString()}원</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3 font-semibold">총 결제 금액</td>
                            <td className="py-3 font-semibold text-blue-600">
                                {orderData.finalPrice.toLocaleString()}원
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center items-center gap-10 w-4/5 mt-16">
                <button 
                    className="w-40 h-12 border border-black rounded-lg hover:bg-gray-100 transition"
                    onClick={handleCancel}
                >
                    취소
                </button>
                <button 
                    className="w-40 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={handlePayment}
                >
                    결제하기
                </button>
            </div>
        </div>
    );
}

export default PayPage;