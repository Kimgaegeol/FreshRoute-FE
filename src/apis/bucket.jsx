import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 장바구니에 상품 추가
export async function addToBucketEvent(production_idx) {
  if (!production_idx) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.post("/bucket", { production_idx });
    if (data.success) {
      return data.bucket;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "장바구니 추가에 실패했습니다.");
  }
}

// 장바구니 항목 삭제
export async function removeFromBucketEvent(bucket_idx) {
  if (!bucket_idx) {
    throw new Error("장바구니 항목 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.delete(`/bucket/${bucket_idx}`);
    if (data.success) {
      return data.deleted_bucket_idx;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "장바구니 항목 삭제에 실패했습니다.");
  }
}

// 장바구니 목록 조회
export async function getBucketListEvent() {
  try {
    const { data } = await api.get("/bucket/list");
    if (data.success) {
      return data.buckets;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "장바구니 목록 조회에 실패했습니다.");
  }
}