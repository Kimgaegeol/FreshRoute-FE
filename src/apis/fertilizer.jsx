import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 비료 생산업체 목록 조회
export async function getFertilizerProducersEvent() {
  try {
    const { data } = await api.get("/api/fertilizer-producers");
    if (data.success) {
      return data.data; // 백엔드에서 data 필드에 배열을 담아서 보냄
    }
    throw new Error(data.message || "비료 생산업체 목록을 불러올 수 없습니다.");
  } catch (err) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "비료 생산업체 목록 조회에 실패했습니다.");
  }
}