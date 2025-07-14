import { useNavigate } from 'react-router';

function FertilizerConversionPage() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/my/farmer/fertilizer-conversion/alarm/${id}`);
    };

    return ( 
        <div className="w-full">
            <h1 className='text-2xl font-bold mb-6'>비료전환</h1>
                         
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">번호</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">내용</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">날짜</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            className="cursor-pointer"
                            onClick={() => handleRowClick(1)}
                        >
                            <td className="border border-gray-300 px-4 py-3">1</td>
                            <td className="border border-gray-300 px-4 py-3">'씹을수록 단 빨간 사과' 상품이 비료로 이전됩니다.</td>
                            <td className="border border-gray-300 px-4 py-3">25.06.25</td>
                            <td className="border border-gray-300 px-4 py-3">
                                <span className="font-medium">확인 대기</span>
                            </td>
                        </tr>
                        <tr 
                            className="cursor-pointer"
                            onClick={() => handleRowClick(2)}
                        >
                            <td className="border border-gray-300 px-4 py-3">2</td>
                            <td className="border border-gray-300 px-4 py-3">'씹을수록 단 빨간 사과' 상품이 비료로 이전됩니다.</td>
                            <td className="border border-gray-300 px-4 py-3">25.06.21</td>
                            <td className="border border-gray-300 px-4 py-3">
                                <span className="font-medium">이전 완료</span>
                            </td>
                        </tr>
                        <tr 
                            className="cursor-pointer" 
                            onClick={() => handleRowClick(3)}
                        >
                            <td className="border border-gray-300 px-4 py-3">3</td>
                            <td className="border border-gray-300 px-4 py-3">'씹을수록 단 빨간 사과' 상품이 비료로 이전됩니다.</td>
                            <td className="border border-gray-300 px-4 py-3">25.06.21</td>
                            <td className="border border-gray-300 px-4 py-3">
                                <span className="font-medium">이전 완료</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FertilizerConversionPage;