import axios from "axios";

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
  if (!category_idx || !name || !explain || !weight || !price || !expiration || !image) {
    throw new Error("모든 필드를 입력해주세요.");
  }

  try {
    // FormData 생성
    const formData = new FormData();
    formData.append("category_idx", category_idx);
    formData.append("name", name);
    formData.append("explain", explain);
    formData.append("weight", weight);
    formData.append("price", price);
    formData.append("expiration", expiration);
    formData.append("image", image);

    const { data } = await axios.post(
      "http://localhost:3000/sale",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
    throw new Error(err.message || "상품 등록에 실패했습니다.");
  }
}