import { useState, useEffect } from "react";
import { getConsumerInfoEvent } from "../../../apis/account";
import { useNavigate } from "react-router-dom";

function ConsumerMyInfoPage() {
  const [consumerInfo, setConsumerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadConsumerInfo();
  }, []);

  const loadConsumerInfo = async () => {
    try {
      setLoading(true);
      const data = await getConsumerInfoEvent();
      setConsumerInfo(data);
    } catch (err) {
      setError(err.message);
      // 로그인 필요 또는 권한 에러 시 로그인 페이지로 이동
      if (err.message.includes("로그인") || err.message.includes("권한")) {
        alert(err.message);
        navigate("/account/signin");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  if (error && !consumerInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">소비자 정보</h1>

      {/* 기본 정보 섹션 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
          기본 정보
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 text-sm">아이디</label>
            <p className="font-medium text-lg">{consumerInfo?.id}</p>
          </div>
          <div>
            <label className="text-gray-600 text-sm">이름</label>
            <p className="font-medium text-lg">{consumerInfo?.name}</p>
          </div>
          <div>
            <label className="text-gray-600 text-sm">이메일</label>
            <p className="font-medium text-lg">{consumerInfo?.email}</p>
          </div>
          <div>
            <label className="text-gray-600 text-sm">연락처</label>
            <p className="font-medium text-lg">{consumerInfo?.phone}</p>
          </div>
        </div>
      </div>

      {/* 계정 정보 섹션 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
          계정 정보
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">가입일</span>
            <span className="font-medium">
              {consumerInfo?.created_at
                ? new Date(consumerInfo.created_at).toLocaleDateString("ko-KR")
                : "-"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">회원 유형</span>
            <span className="font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              소비자
            </span>
          </div>
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex justify-center gap-4">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          정보 수정
        </button>
        <button
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/")}
        >
          홈으로
        </button>
      </div>
    </div>
  );
}

export default ConsumerMyInfoPage;