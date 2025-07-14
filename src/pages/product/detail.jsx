import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getProductDetailEvent } from "../../apis/production";
import { API_BASE_URL } from "../../apis/config";
import { TestContext } from "../../store/testContext";

function ProductDetailPage() {
  const navigate = useNavigate();
  const { pno } = useParams();            // URL 파라미터(pno) 읽기
  const { isLoggedIn } = useContext(TestContext); // Context에서 로그인 상태 가져오기

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);  // 수량 상태 추가

  // 이미지 URL 생성 함수 (List 페이지와 동일)
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `${API_BASE_URL}${imagePath}`;
  };

  // 구매하기 버튼 클릭 핸들러
  const handlePurchase = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate('/account/signin'); // 로그인 페이지로 이동
      return;
    }
    
    // 구매 페이지로 이동 (상품 정보와 수량 전달)
    navigate('/product/pay', {
      state: {
        product: product,
        quantity: quantity,
        totalPrice: product.price * quantity
      }
    });
  };

  // 수량 변경 핸들러
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  useEffect(() => {
    if (!pno) {
      setError("상품 번호가 없습니다.");
      setLoading(false);
      return;
    }
    const fetchDetail = async () => {
      try {
        const data = await getProductDetailEvent(pno);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [pno]);

  if (loading) return <div className="p-8 text-center">로딩 중…</div>;
  if (error) return <div className="p-8 text-red-500 text-center">{error}</div>;

  return (
    <div className="flex justify-center gap-10 p-8">
      {/* 이미지 */}
      <div className="h-[350px] w-[450px] bg-gray-200 rounded-lg overflow-hidden">
        {product.image
          ? <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          : <div className="flex items-center justify-center h-full text-gray-400">이미지 없음</div>
        }
      </div>

      {/* 상세 정보 */}
      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-2xl font-bold">{product.name} ({product.weight})</h1>
        <p className="text-xl">{product.explain}</p>
        <div className="border-t border-gray-300 my-2" />

        <div className="flex items-center gap-5">
          <p className="text-xl">판매가</p>
          <span className="text-xl font-bold text-red-500">
            {product.price?.toLocaleString()}원
          </span>
        </div>

        <div className="border-t border-gray-300 my-2" />

        <div className="flex gap-5">
          <p className="text-xl">카테고리</p>
          <p className="text-lg">{product.category_name}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-xl">유통기한</p>
          <p className="text-lg">{new Date(product.expiration).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-xl">판매자</p>
          <p className="text-lg">농가 #{product.account_idx}</p>
        </div>

        <div className="flex gap-5 items-center">
          <p className="text-xl">수량</p>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
            className="w-20 h-8 border border-gray-400 pl-2"
          />
        </div>

        {/* 총 가격 표시 */}
        <div className="flex items-center gap-5 bg-gray-50 p-3 rounded-lg">
          <p className="text-xl font-semibold">총 가격</p>
          <span className="text-2xl font-bold text-blue-600">
            {(product.price * quantity).toLocaleString()}원
          </span>
        </div>

        <button
          className="mt-6 w-40 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={handlePurchase}
        >
          구매하기
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;