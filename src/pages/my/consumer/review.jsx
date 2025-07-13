import ReviewItem from "../../../components/review/reviewItem";

function ConsumerReviewListPage() {
    return ( 
        <div className="flex flex-col justify-start gap-5 w-full">
            <h1 className='text-2xl font-bold mb-2'>리뷰관리</h1>
            <div className="bg-black w-full h-0.5"></div>
            <ReviewItem
                product="사과 (5알)"
                description="껍질 째 먹어도 되는 사과"
            ></ReviewItem>
            <ReviewItem
                product="사과 (5알)"
                description="껍질 째 먹어도 되는 사과"
            ></ReviewItem>
            <ReviewItem
                product="사과 (5알)"
                description="껍질 째 먹어도 되는 사과"
            ></ReviewItem>
        </div>
     );
}

export default ConsumerReviewListPage;