
function ConsumerReviewWritePage() {
    return ( 
        <div className="flex flex-col justify-start gap-5 w-full">
            <h1 className='text-2xl font-bold mb-2'>후기 작성하기</h1>
            <div className="flex flex-col gap-5">
                <div className="bg-black w-full h-0.5"></div>
                <p className="font-bold text-xl">FreshRoute 서비스에 대해 어떻게 생각하시나요?</p>
                <p className="font-bold">만족도</p>  
                <select className="w-36 h-10 border border-black" defaultValue="">
                    <option value="" disabled>별점 선택</option>
                    <option value="1star">1점</option>
                    <option value="2star">2점</option>
                    <option value="3star">3점</option>
                    <option value="4star">4점</option>
                    <option value="5star">5점</option>
                </select> 
                <div className="bg-black w-full h-0.5"></div>
                <div className="border border-black rounded-lg w-full p-5 mt-5">
                    <div className="flex justify-between gap-6">
                        <div className="flex gap-4">
                            <div className="bg-gray-300 w-24 h-20"></div>
                            <div className="flex flex-col">
                                <p className="font-bold">사과 (5알)</p>
                                <p>껍질 째 먹어도 되는 사과</p>
                            </div>
                        </div>
                        <select className="w-36 h-10 border border-black" defaultValue="">
                            <option value="" disabled>별점 선택</option>
                            <option value="1star">1점</option>
                            <option value="2star">2점</option>
                            <option value="3star">3점</option>
                            <option value="4star">4점</option>
                            <option value="5star">5점</option>
                        </select>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl font-bold mb-2'>상품 리뷰</h1>
            <div className="bg-black w-full h-0.5"></div>
            <div className="flex gap-10">
                <p className='text-xl font-medium pb-5 whitespace-nowrap'>상세리뷰</p>
                <div className="w-full">
                    <textarea 
                        className="border border-black w-full h-96 resize-none p-3"
                        placeholder="상품에 대한 솔직한 리뷰를 남겨주세요"
                    ></textarea>
                    <p>※ 상품 품질과 관계 없는 내용은 비공개 처리될 수 있습니다</p>
                </div>
            </div>
            <div className="bg-black w-full h-0.5"></div>
            <div className="flex gap-4 justify-center">
                {/* <button className="w-36 h-10 border border-black rounded-lg">취소</button> */}
                <button className="w-40 h-12 border border-black rounded-lg">등록하기</button>
            </div>
        </div>
     );
}

export default ConsumerReviewWritePage;