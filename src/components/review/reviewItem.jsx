function ReviewItem({ product, description }) {
    return (  
        <div>
            <div className="flex gap-4">
                <div className="bg-gray-300 w-32 h-24"></div>
                <div className="flex flex-col">
                    <p className="font-bold">{product}</p>
                    <p>{description}</p>
                    <div className="border border-black w-16 h-8 flex justify-center items-center mt-2">1점</div>
                </div>
            </div>
            <div className="bg-black w-full h-0.5 mt-4"></div>
        </div>
    );
}

export default ReviewItem;