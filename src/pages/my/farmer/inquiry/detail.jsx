import { useNavigate } from "react-router";

function FarmerInquiryDetailPage() {
    const navigate = useNavigate();

    return ( 
        <div className="w-full">
            <div className="space-y-4">
                <h1 className='text-2xl font-bold'>문의 상세</h1>
                <p className='text-2xl font-bold'>25.06.02 (월) 문의</p>
            </div>
            {/* 문의 내용 */}
            <h1 className='text-xl font-bold mt-10'>문의 내용</h1>
            <div className="flex flex-col mt-5 w-4/5">
                <table>
                    <tbody>
                        <tr className="border-t-2 border-black">
                            <td className="w-32 pt-3">문의자</td>
                            <td className="pt-3">홍길동</td>
                        </tr>
                        <tr>
                            <td className="pt-3">문의 유형</td>
                            <td className="pt-3">배송</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3">문의 제목</td>
                            <td className="py-3">배송이 아직 안 왔습니다.</td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="py-3">문의 내용</td>
                            <td className="py-3">배송이 아직 안 왔습니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* 답변 하기 */}
            <h1 className='text-xl font-bold mt-10 mb-6'>답변 하기</h1>
            <textarea className="w-4/5 border border-black h-96 resize-none"></textarea>
            {/* 버튼 */}
            <div className="flex justify-between items-center gap-10 w-4/5 mt-16">
                <button 
                    onClick={() => navigate('/my/farmer/inquiry/list')}
                    className="w-52 h-12 border border-black rounded-lg"
                >문의확인 돌아가기</button>
                <button 
                    className="w-40 h-12 border border-black rounded-lg"
                >답변 완료</button>
            </div>
        </div>
     );
}

export default FarmerInquiryDetailPage;