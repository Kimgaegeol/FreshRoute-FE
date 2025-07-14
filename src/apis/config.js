const HOST =
  window.location.hostname === "165.246.116.181"
    ? "localhost"
    : window.location.hostname; // 192.168.x.x 도 여기로 들어옵니다

export const API_BASE_URL = `http://165.246.116.181:3000`;