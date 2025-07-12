import axios from "axios";

// 구매 내역 조회
export async function getBuyListEvent() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/my/consumer/buy/list",
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
    const { data } = await axios.post(
      "http://localhost:3000/my/consumer/inquiry",
      {
        order_idx,
        type_idx,
        title,
        content,
        state,
      },
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.inquiry;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "문의글 작성에 실패했습니다.");
  }
}

// 문의글 목록 조회
export async function getInquiryListEvent() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/my/consumer/inquiry/list",
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.inquiries;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "문의글 목록 조회에 실패했습니다.");
  }
}

// 특정 문의글 상세 조회
export async function getInquiryDetailEvent(inquiryId) {
  if (!inquiryId) {
    throw new Error("문의글 ID를 입력해주세요.");
  }

  try {
    const { data } = await axios.get(
      `http://localhost:3000/my/consumer/inquiry/${inquiryId}`,
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.inquiry;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
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
    const { data } = await axios.post(
      "http://localhost:3000/my/consumer/review",
      {
        order_idx,
        likes,
      },
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.review;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "리뷰 등록에 실패했습니다.");
  }
}

// 리뷰 목록 조회
export async function getReviewListEvent() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/my/consumer/review",
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.reviews;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "리뷰 목록 조회에 실패했습니다.");
  }
}