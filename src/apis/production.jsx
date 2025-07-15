import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 전체 카테고리 목록 조회
export async function getCategoriesEvent() {
  try {
    const { data } = await api.get("/backend/production/category");
    if (data.success) {
      return data.categories;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "카테고리 조회에 실패했습니다.");
  }
}

// 상품 목록 조회 (전체 또는 카테고리별)
export async function getProductsEvent(category_idx = null) {
  try {
    const endpoint = category_idx
      ? `/backend/production/list?category_idx=${category_idx}`
      : `/backend/production/list`;
    const { data } = await api.get(endpoint);
    if (data.success) {
      return data.products;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "상품 목록 조회에 실패했습니다.");
  }
}

// 특정 상품 상세 조회
export async function getProductDetailEvent(productId) {
  if (!productId) {
    throw new Error("상품 ID를 입력해주세요.");
  }
  try {
    const { data } = await api.get(`/backend/production/${productId}`);
    if (data.success) {
      return data.product;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "상품 상세 조회에 실패했습니다.");
  }
}