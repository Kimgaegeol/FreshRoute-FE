import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createOrderEvent } from "../../apis/production";
import { API_BASE_URL } from "../../apis/config";

function PayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // ProductDetailPage에서 전달받은 데이터
  const { product, quantity, totalPrice } = location.state || {};

  // 이미지 URL 생성 함수
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `${API_BASE_URL}${imagePath}`;
  };

  // 세션 체크 함수
  const checkSession = () => {
    const sessionData = sessionStorage.getItem('userSession');
    return sessionData !== null;
  };

  // 결제 처리 함수
  const handlePayment = async () => {
    if (!checkSession()) {
      alert("로그인이 필요합니다.");
      navigate('/account/signin');
      return;
    }

    if (!product?.pno) {
      alert("상품 정보가 없습니다.");
      return;
    }

    try {
      setLoading(true);
      const orderData = await createOrderEvent(product.pno);
      
      // 결제 성공 시 처리
      alert("결제가 완료되었습니다!");
      
      // 주문 완료 페이지로 이동하거나 메인 페이지로 이동
      navigate('/'); // 또는 주문 완료 페이지 경로
      
    } catch (error) {
      alert(`결제 실패: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // 뒤로가기 함수
  const handleGoBack = () => {
    navigate(-1);
  };

  // 데이터가 없으면 에러 처리
  if (!product || !quantity || !totalPrice) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 mb-4">주문 정보를 찾을 수 없습니다.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          메인으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">주문 결제</h1>
      
      {/* 주문 상품 정보 */}
      <div className="bg-white border rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">주문 상품</h2>
        
        <div className="flex gap-4">
          {/* 상품 이미지 */}
          <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            {product.image ? (
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                이미지 없음
              </div>
            )}
          </div>

          {/* 상품 정보 */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">({product.weight})</p>
            <p className="text-gray-600 mt-1">{product.explain}</p>
            <p className="text-sm text-gray-500 mt-2">
              판매자: 농가 #{product.account_idx}
            </p>
          </div>

          {/* 수량 및 가격 */}
          <div className="text-right">
            <p className="text-lg font-semibold">
              {product.price?.toLocaleString()}원
            </p>
            <p className="text-gray-600">수량: {quantity}개</p>
          </div>
        </div>
      </div>

      {/* 결제 상세 내역 */}
      <div className="bg-white border rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">결제 상세 내역</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>상품 가격</span>
            <span>{product.price?.toLocaleString()}원</span>
          </div>
          
          <div className="flex justify-between">
            <span>수량</span>
            <span>{quantity}개</span>
          </div>
          
          <div className="flex justify-between">
            <span>소계</span>
            <span>{(product.price * quantity).toLocaleString()}원</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>배송비</span>
            <span>무료</span>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between text-xl font-bold text-blue-600">
              <span>총 결제 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
          </div>
        </div>
      </div>

      {/* 배송 정보 */}
      <div className="bg-white border rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">배송 정보</h2>
        <div className="space-y-2 text-gray-600">
          <p>• 배송 방법: 일반 배송</p>
          <p>• 배송비: 무료</p>
          <p>• 배송 예상일: 주문 후 2-3일</p>
          <p>• 유통기한: {new Date(product.expiration).toLocaleDateString()}</p>
        </div>
      </div>

      {/* 주문 동의 및 결제 버튼 */}
      <div className="bg-gray-50 border rounded-lg p-6">
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm">주문 내용을 확인했으며, 정보 제공 등에 동의합니다.</span>
          </label>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoBack}
            className="flex-1 h-12 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            disabled={loading}
          >
            뒤로가기
          </button>
          
          <button
            onClick={handlePayment}
            disabled={loading}
            className="flex-1 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "결제 중..." : `${totalPrice.toLocaleString()}원 결제하기`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayPage;