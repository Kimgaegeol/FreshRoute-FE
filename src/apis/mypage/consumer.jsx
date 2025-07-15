import axios from "axios";
import { API_BASE_URL } from "./../config";


const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 구매 내역 조회
export async function getBuyListEvent() {
  try {
    const { data } = await api.get("/backend/my/consumer/buy/list");
    if (data.success) {
      return data.orders;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "구매 내역 조회에 실패했습니다.");
  }
}

// 문의글 작성
export async function createInquiryEvent(inquiryData) {
  const { order_idx, type_idx, title, content, state } = inquiryData;
  if (!order_idx || !type_idx || !title || !content || !state) {
    throw new Error("모든 필드를 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/my/consumer/inquiry", {
      order_idx, type_idx, title, content, state
    });
    if (data.success) {
      return data.inquiry;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "문의글 작성에 실패했습니다.");
  }
}

// 문의글 목록 조회
export async function getInquiryListEvent() {
  try {
    const { data } = await api.get("/backend/my/consumer/inquiry/list");
    if (data.success) {
      return data.inquiries;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "문의글 목록 조회에 실패했습니다.");
  }
}

// 특정 문의글 상세 조회
export async function getInquiryDetailEvent(inquiryId) {
  if (!inquiryId) {
    throw new Error("문의글 ID를 입력해주세요.");
  }
  try {
    const { data } = await api.get(`/backend/my/consumer/inquiry/${inquiryId}`);
    if (data.success) {
      return data.inquiry;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "문의글 조회에 실패했습니다.");
  }
}

// 리뷰 등록
export async function createReviewEvent(reviewData) {
  const { order_idx, likes } = reviewData;
  if (!order_idx || likes === undefined) {
    throw new Error("order_idx와 likes를 모두 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/my/consumer/review", {
      order_idx, likes
    });
    if (data.success) {
      return data.review;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "리뷰 등록에 실패했습니다.");
  }
}

// 리뷰 목록 조회
export async function getReviewListEvent() {
  try {
    const { data } = await api.get("/backend/my/consumer/review");
    if (data.success) {
      return data.reviews;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "리뷰 목록 조회에 실패했습니다.");
  }
}
