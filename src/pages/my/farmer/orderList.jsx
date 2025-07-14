import { useState, useEffect } from "react";
import { getFarmerOrderListEvent } from "../../../apis/mypage/farmer";
import { useNavigate } from "react-router-dom";

function FarmerOrderListPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("all"); // all, pending, completed
    const navigate = useNavigate();

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            setLoading(true);
            const data = await getFarmerOrderListEvent();
            setOrders(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // 주문 상태에 따른 필터링
    const filteredOrders = filter === "all" 
        ? orders 
        : filter === "pending" 
        ? orders.filter(order => !order.is_finished)
        : orders.filter(order => order.is_finished);

    // 주문 상태 텍스트 변환
    const getOrderStateText = (state, isFinished) => {
        if (isFinished) return "배송완료";
        switch(state) {
            case "pending": return "결제대기";
            case "paid": return "결제완료";
            case "shipping": return "배송중";
            default: return state;
        }
    };

    // 주문 상태 색상
    const getOrderStateColor = (state, isFinished) => {
        if (isFinished) return "bg-gray-100 text-gray-600";
        switch(state) {
            case "pending": return "bg-yellow-100 text-yellow-600";
            case "paid": return "bg-blue-100 text-blue-600";
            case "shipping": return "bg-green-100 text-green-600";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    // 통계 계산
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(order => !order.is_finished).length;
    const completedOrders = orders.filter(order => order.is_finished).length;
    const totalRevenue = orders.reduce((sum, order) => sum + (order.price || 0), 0);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">로딩 중...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return ( 
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">주문 관리</h1>
                <button 
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    onClick={() => navigate('/my/farmer')}
                >
                    돌아가기
                </button>
            </div>

            {/* 주문 통계 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">총 주문</h3>
                    <p className="text-2xl font-bold text-gray-800">{totalOrders}건</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">처리 대기</h3>
                    <p className="text-2xl font-bold text-yellow-600">{pendingOrders}건</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">배송 완료</h3>
                    <p className="text-2xl font-bold text-green-600">{completedOrders}건</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-600 text-sm mb-2">총 매출</h3>
                    <p className="text-2xl font-bold text-blue-600">{totalRevenue.toLocaleString()}원</p>
                </div>
            </div>

            {/* 필터 탭 */}
            <div className="mb-6 border-b">
                <div className="flex gap-4">
                    <button
                        className={`pb-3 px-4 font-medium transition-colors ${
                            filter === "all" 
                                ? 'text-green-600 border-b-2 border-green-600' 
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setFilter("all")}
                    >
                        전체 주문 ({totalOrders})
                    </button>
                    <button
                        className={`pb-3 px-4 font-medium transition-colors ${
                            filter === "pending" 
                                ? 'text-green-600 border-b-2 border-green-600' 
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setFilter("pending")}
                    >
                        처리 대기 ({pendingOrders})
                    </button>
                    <button
                        className={`pb-3 px-4 font-medium transition-colors ${
                            filter === "completed" 
                                ? 'text-green-600 border-b-2 border-green-600' 
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setFilter("completed")}
                    >
                        배송 완료 ({completedOrders})
                    </button>
                </div>
            </div>

            {/* 주문 목록 */}
            {filteredOrders.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 mb-4">
                        {filter === "all" ? "아직 주문이 없습니다." :
                         filter === "pending" ? "처리 대기 중인 주문이 없습니다." :
                         "배송 완료된 주문이 없습니다."}
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left p-4 font-medium text-gray-700">주문번호</th>
                                <th className="text-left p-4 font-medium text-gray-700">상품명</th>
                                <th className="text-left p-4 font-medium text-gray-700">가격</th>
                                <th className="text-left p-4 font-medium text-gray-700">주문일시</th>
                                <th className="text-left p-4 font-medium text-gray-700">상태</th>
                                <th className="text-left p-4 font-medium text-gray-700">구매자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order, index) => (
                                <tr key={order.order_id} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                    <td className="p-4 text-gray-800">#{order.order_id}</td>
                                    <td className="p-4">
                                        <div className="font-medium text-gray-800">{order.product_name}</div>
                                    </td>
                                    <td className="p-4 font-bold text-gray-800">{order.price?.toLocaleString()}원</td>
                                    <td className="p-4 text-gray-600 text-sm">
                                        {new Date(order.order_date).toLocaleDateString('ko-KR')}
                                        <br />
                                        <span className="text-xs text-gray-400">
                                            {new Date(order.order_date).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getOrderStateColor(order.order_state, order.is_finished)}`}>
                                            {getOrderStateText(order.order_state, order.is_finished)}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        구매자 #{order.buyer_account_idx}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* 페이지 하단 안내 */}
            <div className="mt-8 text-center text-sm text-gray-500">
                <p>주문 상태는 구매자의 결제 및 배송 진행 상황에 따라 자동으로 업데이트됩니다.</p>
            </div>
        </div>
    );
}

export default FarmerOrderListPage;