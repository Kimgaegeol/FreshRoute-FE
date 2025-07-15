import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 상품 등록
export async function createProductEvent({ 
  category_idx, 
  name, 
  explain, 
  weight, 
  price, 
  expiration, 
  image 
}) {
  if (
    !category_idx ||
    !name ||
    !explain ||
    !weight ||
    !price ||
    !expiration ||
    !image
  ) {
    throw new Error("모든 필드를 입력해주세요.");
  }

  try {
    const formData = new FormData();
    formData.append("category_idx", category_idx);
    formData.append("name", name);
    formData.append("explain", explain);
    formData.append("weight", weight);
    formData.append("price", price);
    formData.append("expiration", expiration);
    formData.append("image", image);

    const { data } = await api.post("/backend/sale", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data.success) {
      return data.product;
    }
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "상품 등록에 실패했습니다.");
  }
}