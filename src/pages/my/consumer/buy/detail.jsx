import { useNavigate } from "react-router";

function ConsumerBuyDetailPage() {
    const navigate = useNavigate();
    return ( 
        <div className="ml-10 w-full">
            <h1 className='text-2xl font-bold'>구매 상세</h1>
            <div className="space-y-6 mt-8 w-full">
                <p className="font-bold text-xl whitespace-nowrap">25.06.09 (월) 주문</p>
                {/* 상품 박스 */}
                <div className="flex items-center gap-6 border border-black rounded-lg w-4/5 p-5 mt-5">
                    <div className="bg-gray-300 w-40 h-36"></div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-xl whitespace-nowrap">사과 (5알)</p>
                        <p className="text-base whitespace-nowrap">껍질 째 먹어도 되는 사과</p>
                        <p className="font-bold text-xl mt-3 whitespace-nowrap">6,000원</p>
                    </div>
                </div>
            </div>
            {/* 주문자 정보 */}
            <h1 className='text-xl font-bold mt-10'>배송 정보</h1>
            <div className="flex flex-col mt-5 w-4/5">
                <table>
                    <tbody>
                        <tr className="border-t-2 border-black">
                            <td className="w-20 pt-3">이름</td>
                            <td className="pt-3">홍길동</td>
                        </tr>
                        <tr>
                            <td className="pt-3">연락처</td>
                            <td className="pt-3">010-1234-5678</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3">주소</td>
                            <td className="py-3">(12345) 인천광역시 미추홀구 인하로 100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* 결제 정보 */}
            <h1 className='text-xl font-bold mt-10'>결제 정보</h1>
            <div className="flex flex-col mt-5 w-4/5">
                <table>
                    <tbody>
                        <tr className="border-t-2 border-black">
                            <td className="w-52 pt-3">총 상품 가격</td>
                            <td className="pt-3">18,000원</td>
                        </tr>
                        <tr>
                            <td className="pt-3">할인 금액</td>
                            <td className="pt-3">4,000원</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3">배송비</td>
                            <td className="py-3">1,500원</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3 font-semibold">총 결제 금액</td>
                            <td className="py-3">15,500원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* 버튼 */}
            <div className="flex justify-between items-center gap-10 w-4/5 mt-16">
                <button 
                    onClick={() => navigate('/my/consumer/buy/list')}
                    className="w-52 h-12 border border-black rounded-lg"
                >구매목록 돌아가기</button>
            </div>
        </div>
     );
}

export default ConsumerBuyDetailPage;