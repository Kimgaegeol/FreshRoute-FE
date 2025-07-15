import axios from "axios";
import { API_BASE_URL } from "./../config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 판매 상품 목록 조회
export async function getFarmerSaleListEvent() {
  try {
    const { data } = await api.get("/backend/my/farmer/sale/list");
    if (data.success) {
      return data.products;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "판매 상품 목록 조회에 실패했습니다.");
  }
}

// 특정 상품 상세 조회
export async function getFarmerSaleDetailEvent(productId) {
  if (!productId) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.get(
      `/backend/my/farmer/sale/${productId}`
    );
    if (data.success) {
      return data.product;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "상품 상세 조회에 실패했습니다.");
  }
}

// 상품 수정
export async function updateFarmerSaleEvent(productId, productData) {
  if (!productId) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  const { category_idx, name, explain, weight, price, image, expiration } = productData;

  try {
    const { data } = await api.put(
      `/backend/my/farmer/sale/${productId}`,
      { category_idx, name, explain, weight, price, image, expiration }
    );
    if (data.success) {
      return data.product_id;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "상품 수정에 실패했습니다.");
  }
}

// 상품 삭제
export async function deleteFarmerSaleEvent(productId) {
  if (!productId) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.delete(
      `/backend/my/farmer/sale/${productId}`
    );
    if (data.success) {
      return data.deleted_product_id;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "상품 삭제에 실패했습니다.");
  }
}

// 내 상품에 대한 주문 내역 조회
export async function getFarmerOrderListEvent() {
  try {
    const { data } = await api.get("/backend/my/farmer/order/list");
    if (data.success) {
      return data.orders;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "주문 내역 조회에 실패했습니다.");
  }
}

// 주문 상세 조회
export async function getFarmerOrderDetailEvent(orderId) {
  if (!orderId) {
    throw new Error("주문 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.get(
      `/backend/my/farmer/order/${orderId}`
    );
    if (data.success) {
      return data.order;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "주문 상세 조회에 실패했습니다.");
  }
}

// 내 상품에 대한 문의 목록 조회
export async function getFarmerInquiryListEvent() {
  try {
    const { data } = await api.get("/backend/my/farmer/inquiry/list");
    if (data.success) {
      return data.inquiries;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "문의 목록 조회에 실패했습니다.");
  }
}

// 특정 문의 상세 조회
export async function getFarmerInquiryDetailEvent(inquiryId) {
  if (!inquiryId) {
    throw new Error("문의 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.get(
      `/backend/my/farmer/inquiry/${inquiryId}`
    );
    if (data.success) {
      return data.inquiry;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "문의 상세 조회에 실패했습니다.");
  }
}

// 특정 주문에 대한 리뷰 조회
export async function getFarmerReviewDetailEvent(orderId) {
  if (!orderId) {
    throw new Error("주문 ID를 입력해주세요.");
  }

  try {
    const { data } = await api.get(
      `/backend/my/farmer/review/${orderId}`
    );
    if (data.success) {
      return data.review;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "리뷰 조회에 실패했습니다.");
  }
}
