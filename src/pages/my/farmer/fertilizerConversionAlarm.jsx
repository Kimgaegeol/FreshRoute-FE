import { useNavigate } from "react-router";
import { useState } from "react";
import { getFertilizerProducersEvent } from "../../../apis/fertilizer";

function FertilizerConversionAlarmPage() {
    const navigate = useNavigate();
    const [showProducers, setShowProducers] = useState(false);
    const [producers, setProducers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("all");

    // CSV 파일 읽기 및 파싱
    const loadProducers = async () => {
        setLoading(true);
        try {
            // API를 통해 비료 생산업체 목록 가져오기
            const data = await getFertilizerProducersEvent();
            setProducers(data);
            setShowProducers(true);
        } catch (error) {
            console.error('비료 생산업체 목록 로드 실패:', error);
            alert(error.message);
            // 에러 발생 시에도 UI는 표시 (빈 목록)
            setShowProducers(true);
        } finally {
            setLoading(false);
        }
    };

    // 지역별 필터링
    const filteredProducers = selectedRegion === "all" 
        ? producers 
        : producers.filter(p => p.region === selectedRegion);

    // 고유한 지역 목록
    const regions = ["all", ...new Set(producers.map(p => p.region))];

    return (  
        <div className="w-full">
            <h1 className='text-2xl font-bold mb-6'>알림상세</h1>
            <div className="mb-6">
                <h2 className="text-xl font-bold">25.06.25 (수) 알림</h2>
            </div>
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-black">알림 내용</h3>
                <div className="space-y-4">
                    <div className="flex">
                        <div className="w-16 text-sm font-medium flex-shrink-0">제목</div>
                        <div className="flex-1 text-sm">'씹을수록 단 빨간 사과' 상품이 비료로 이전됩니다.</div>
                    </div>
                    <div className="border-b-2 border-black"></div>
                    <div className="flex">
                        <div className="w-16 text-sm font-medium flex-shrink-0">내용</div>
                        <div className="flex-1 text-sm space-y-2">
                            <p>2025.06.01(일)에 등록된 '씹을수록 단 빨간 사과' 상품이 유통기한 초과로 비료로 이전됩니다.</p>
                            <p>등록하신 유통기한 2025.06.28(토)에 맞게 남은 재고량 총 4개가 비료로 이전되며,</p>
                            <p>자원 순환을 위해 비료 업체로 전달 부탁드립니다. 전달이 확인되면 농가 포인트가 추가됩니다.</p>
                            <p>감사합니다.</p>
                        </div>
                    </div>
                    <div className="border-b-2 border-black"></div>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-black">선택 사항</h3>
                <div className="mb-4">
                    <p className="text-sm mb-4">비료 전환 하시겠습니까?</p>
                    <div className="flex gap-4 mb-6">
                        <button className="px-8 py-2 border border-black rounded text-sm hover:bg-gray-100">
                            예
                        </button>
                        <button className="px-8 py-2 border border-black rounded text-sm hover:bg-gray-100">
                            아니오
                        </button>
                    </div>
                </div>
                <div className="border-b-2 border-black"></div>
                <div className="p-4 text-xs mb-4">
                    <p>※ '예'를 선택하시면 아래의 주소로 상품을 전달해주시면 됩니다. 전달이 확인되면 알림 창에서 상태가 변화되고, 포인트가 올라갑니다.</p>
                    <p>※ '아니오'를 선택하시면 알림은 삭제되며 자체 폐기해주시기 바랍니다.</p>
                    <p>※ 판매글은 자동으로 삭제됩니다.</p>
                </div>

                <div className="flex items-center mb-12">
                    <button 
                        onClick={loadProducers}
                        disabled={loading}
                        className="px-8 py-2 border border-black rounded text-sm hover:bg-gray-100 disabled:opacity-50"
                    >
                        {loading ? '로딩 중...' : '가까운 생산업체 찾기'}
                    </button>
                </div>

                {/* 비료 생산업체 테이블 */}
                {showProducers && (
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">비료 생산업체 목록</h3>
                        
                        {/* 지역 필터 */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {regions.map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setSelectedRegion(region)}
                                    className={`px-4 py-1 rounded text-sm transition-colors ${
                                        selectedRegion === region
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                >
                                    {region === "all" ? "전체" : region}
                                </button>
                            ))}
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">지역</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">업체명</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">전화</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">주소</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProducers.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                                                해당 지역에 등록된 업체가 없습니다.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredProducers.map((producer, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-2 text-sm">{producer.region}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium">{producer.company}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-sm">{producer.phone}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-sm">{producer.address}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="mt-4 text-xs text-gray-600">
                            <p>* 가까운 비료 생산업체를 선택하여 연락 후 전달해주시기 바랍니다.</p>
                            <p>* 전달 완료 후 확인 버튼을 눌러주세요.</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <button
                    onClick={() => navigate('/my/farmer/fertilizer-conversion/')} 
                    className="px-6 py-2 border border-black rounded text-sm hover:bg-gray-100">
                    비료전환 돌아가기
                </button>
                <button className="px-6 py-2 border border-black rounded text-sm hover:bg-gray-100">
                    확인 완료
                </button>
            </div>
        </div>
    );
}

export default FertilizerConversionAlarmPage;