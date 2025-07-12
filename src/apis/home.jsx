import axios from "axios";

export async function getRandomProductsEvent() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/home",
      {
        withCredentials: true,
      }
    );

    // 백엔드에서 { products: [...] } 형태로 반환
    return data.products;
  } catch (err) {
    // 네트워크 에러나 4xx/5xx 에러 처리
    if (err.response && err.response.data && err.response.data.error) {
      throw new Error(err.response.data.error);
    }
    throw new Error(err.message || "상품을 불러오는데 실패했습니다.");
  }
}