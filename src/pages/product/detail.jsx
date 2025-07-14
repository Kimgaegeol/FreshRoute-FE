import { useNavigate } from "react-router";

function ProductDetailPage() {
    const navigate = useNavigate();

    return ( 
        <div className="flex justify-center gap-10">
            {/* 사진 */}
            <div className="h-[350px] w-[450px] bg-gray-300"></div>
            {/* 설명 */}
            <div className="flex flex-col justify-start gap-2">
                <h1 className='text-2xl font-bold'>사과 (5알)</h1>
                <p className="text-xl">껍질 째 먹어도 되는 사과</p>
                <div className="bg-black w-96 h-0.5"></div>
                <div className="flex items-center gap-5">
                    <p className="text-xl">판매 가격</p>
                    <p className="text-red-500 text-xl font-bold">20%</p>
                    <div className="flex items-center gap-3">
                        <p className="text-gray-500 line-through">8,000</p>
                        <p className="text-xl font-bold">6,000</p>
                    </div>
                </div>
                <div className="bg-black w-96 h-0.5"></div>
                <div className="flex gap-5">
                    <p className="text-xl">상호</p>
                    <p className="text-lg">맛있는 사과 (착한 농가 점수 13)</p>
                </div>
                <div className="flex gap-5">
                    <p className="text-xl">원산지</p>
                    <p className="text-lg">경기도 파주</p>
                </div>
                <div className="flex gap-5">
                    <p className="text-xl">배송비</p>
                    <p className="text-lg">2,500</p>
                </div>
                <div className="flex gap-5 items-center">
                    <p className="text-xl">수량</p>
                    <input className="h-8 w-16 border border-black"></input>
                </div>
                <button 
                    className="w-36 h-10 border border-black mt-6"
                    onClick={() => navigate('/product/pay')}
                >구매</button>
            </div>
        </div>
     );
}

export default ProductDetailPage;