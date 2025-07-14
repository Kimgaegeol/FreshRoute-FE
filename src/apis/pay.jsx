import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 주문 생성 (결제 처리)
export async function createOrderEvent(production_idx) {
  if (!production_idx) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.post("/pay", { production_idx });
    if (data.success) {
      return data.orders;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "주문 생성에 실패했습니다.");
  }
}