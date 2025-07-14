import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export async function getRandomProductsEvent() {
  try {
    const { data } = await api.get("/home");
    // 백엔드에서 { products: [...] } 형태로 반환
    return data.products;
  } catch (err) {
    if (err.response?.data?.error) {
      throw new Error(err.response.data.error);
    }
    throw new Error(err.message || "상품을 불러오는데 실패했습니다.");
  }
}