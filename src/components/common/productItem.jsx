function ProductItem({ 
        product,
        description,
        count,
        percent,
        originalPrice,
        discountPrice,
        buttonTitle
    
    }) {
    return (  
        <div className="flex justify-between items-center gap-32 border border-black w-[1200px] p-4 mt-4">
            <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-40 h-32"></div>
                <div className="flex flex-col">
                    <p className="font-bold text-lg">{product}</p>
                    <p>{description}</p>
                </div>
            </div>
            <p className="font-bold text-lg">{count}</p>
            <div className="flex items-center gap-4">
                <p className="text-red-500 text-xl font-bold">{percent}</p>
                <div className="flex items-center gap-3">
                    <p className="text-gray-500 line-through">{originalPrice}</p>
                    <p className="text-xl font-bold">{discountPrice}</p>
                </div>
                <button className="ml-6 h-10 w-32 rounded-lg bg-primary-500 text-white">{buttonTitle}</button>
            </div>
        </div>
    );
}

export default ProductItem;