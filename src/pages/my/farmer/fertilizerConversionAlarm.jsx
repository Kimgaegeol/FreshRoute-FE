import { useNavigate } from "react-router";

function FertilizerConversionAlarmPage() {
    const navigate = useNavigate();
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
                        <button className="px-8 py-2 border border-black rounded text-sm">
                            예
                        </button>
                        <button className="px-8 py-2 border border-black rounded text-sm">
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
                    <button className="px-8 py-2 border border-black rounded text-sm">
                            가까운 생산업체 찾기
                    </button>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={() => navigate('/my/farmer/fertilizer-conversion/')} 
                    className="px-6 py-2 border border-black rounded text-sm">
                    비료전환 돌아가기
                </button>
                <button className="px-6 py-2 border border-black rounded text-sm">
                    확인 완료
                </button>
            </div>
        </div>
    );
}

export default FertilizerConversionAlarmPage;