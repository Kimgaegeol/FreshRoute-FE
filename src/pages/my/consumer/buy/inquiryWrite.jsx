function ConsumerInquiryWritePage() {
    return ( 
        <div className="flex flex-col justify-start gap-5 w-full">
            <h1 className='text-2xl font-bold pb-5'>문의하기</h1>
            <div className="flex gap-10">
                <h2 className='text-xl font-medium pb-5'>문의유형</h2>
                <select className="p-2 w-36 border border-black" defaultValue="">
                    <option value="" disabled>카테고리 선택</option>
                    <option value="delivery">배송 문의</option>
                    <option value="product">상품 문의</option>
                    <option value="refund">환불 문의</option>
                    <option value="etc">기타 문의</option>
                </select>
            </div>
            <div className="flex gap-10">
                <h2 className='text-xl font-medium pb-5 whitespace-nowrap'>문의제목</h2>
                <input className="border border-black w-full h-12"></input>
            </div>
            <div className="flex gap-10">
                <h2 className='text-xl font-medium pb-5 whitespace-nowrap'>문의내용</h2>
                <textarea className="border border-black w-full h-96 resize-none"></textarea>
            </div>
            <div className="flex gap-4 justify-center">
                <button className="w-36 h-10 border border-black rounded-lg">취소</button>
                <button className="w-36 h-10 border border-black rounded-lg">문의하기</button>
            </div>
        </div>
     );
}

export default ConsumerInquiryWritePage;