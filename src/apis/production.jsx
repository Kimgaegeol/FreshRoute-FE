import axios from "axios";

// 전체 카테고리 목록 조회
export async function getCategoriesEvent() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/production/category",
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.categories;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "카테고리 조회에 실패했습니다.");
  }
}

// 상품 목록 조회 (전체 또는 카테고리별)
export async function getProductsEvent(category_idx = null) {
  try {
    const url = category_idx 
      ? `http://localhost:3000/production/list?category_idx=${category_idx}`
      : "http://localhost:3000/production/list";

    const { data } = await axios.get(url, {
      withCredentials: true,
    });

    if (data.success) {
      return data.products;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "상품 목록 조회에 실패했습니다.");
  }
}

// 특정 상품 상세 조회
export async function getProductDetailEvent(productId) {
  if (!productId) {
    throw new Error("상품 ID를 입력해주세요.");
  }

  try {
    const { data } = await axios.get(
      `http://localhost:3000/production/${productId}`,
      {
        withCredentials: true,
      }
    );

    if (data.success) {
      return data.product;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "상품 상세 조회에 실패했습니다.");
  }
}