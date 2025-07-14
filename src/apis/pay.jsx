import axios from "axios";

// 주문 생성 (결제 처리)
export async function createOrderEvent(production_idx) {
  if (!production_idx) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  try {
    const { data } = await axios.post(
      "http://localhost:3000/pay",
      { production_idx },
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.orders;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "주문 생성에 실패했습니다.");
  }
}