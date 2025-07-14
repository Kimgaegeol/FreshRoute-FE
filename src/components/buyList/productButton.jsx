import { useNavigate } from "react-router";

function ProductButton() {
    const navigate = useNavigate();

    return (  
        <div className="flex flex-col border border-black rounded-lg p-5 mt-5 gap-3">
            <button 
                onClick={() => navigate('/my/consumer/buy/:pno')}
                className="bg-primary-500 text-white w-40 h-10 rounded-lg">구매 상세정보</button>
            <button 
                onClick={() => navigate('/my/consumer/buy/inquiry-write')}
                className="bg-primary-500 text-white w-40 h-10 rounded-lg">문의하기</button>
            <button 
                onClick={() => navigate('/my/consumer/buy/review-write')}
                className="bg-primary-500 text-white w-40 h-10 rounded-lg">후기 작성하기</button>
        </div>
    );
}

export default ProductButton;