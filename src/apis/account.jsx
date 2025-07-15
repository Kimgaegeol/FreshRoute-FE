import axios from "axios";
import { API_BASE_URL } from "./config";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 소비자 회원가입
export async function signUpConsumerEvent({ id, pw, name, email, phone }) {
  if (!id || !pw || !name || !email || !phone) {
    throw new Error("모든 필수 필드를 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/account/consumer", { id, pw, name, email, phone });
    if (data.success) return data.user;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "소비자 회원가입에 실패했습니다.");
  }
}

// 농장주 회원가입
export async function signUpFarmerEvent({ id, pw, name, email, phone, farm_name, farm_address }) {
  if (!id || !pw || !name || !email || !phone || !farm_name || !farm_address) {
    throw new Error("모든 필드를 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/account/farmer", { id, pw, name, email, phone, farm_name, farm_address });
    if (data.success) return data.account;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "농장주 회원가입에 실패했습니다.");
  }
}

// 로그인
export async function signInEvent({ id, pw }) {
  if (!id || !pw) {
    throw new Error("아이디와 비밀번호를 모두 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/account/signin", { id, pw });
    if (data.success) return data.user;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "로그인에 실패했습니다.");
  }
}

// 소비자 정보 조회
export async function getConsumerInfoEvent() {
  try {
    const { data } = await api.get("/backend/account/info/consumer");
    if (data.success) return data.user;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "소비자 정보 조회에 실패했습니다.");
  }
}

// 농장주 정보 조회
export async function getFarmerInfoEvent() {
  try {
    const { data } = await api.get("/backend/account/info/farmer");
    if (data.success) return data.farmer;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "농장주 정보 조회에 실패했습니다.");
  }
}

// 전화번호와 이메일로 ID 검색
export async function searchIdEvent({ phone, email }) {
  if (!phone || !email) {
    throw new Error("전화번호와 이메일을 모두 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/account/search/id", { phone, email });
    if (data.success) return data.id;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "ID 검색에 실패했습니다.");
  }
}

// 전화번호와 이메일로 PW 검색
export async function searchPwEvent({ phone, email }) {
  if (!phone || !email) {
    throw new Error("전화번호와 이메일을 모두 입력해주세요.");
  }
  try {
    const { data } = await api.post("/backend/account/search/pw", { phone, email });
    if (data.success) return data.pw;
    throw new Error(data.message);
  } catch (err) {
    if (err.response?.data?.message) throw new Error(err.response.data.message);
    throw new Error(err.message || "비밀번호 검색에 실패했습니다.");
  }
}