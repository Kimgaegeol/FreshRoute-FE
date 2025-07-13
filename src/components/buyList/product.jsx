import ProductButton from './productButton';
function Product({
        date,
        product,
        description,
        price
}) {
    return (  
        <div className="flex gap-4">
            <div className="border border-black rounded-lg p-5 pr-60 mt-5">
            <p className='text-2xl font-bold pb-5'>{date}</p>
            <div className="flex gap-6">
                <div className="bg-gray-300 w-24 h-20"></div>
                <div className="flex flex-col">
                    <p className="font-bold">{product}</p>
                    <p>{description}</p>
                    <p className="font-bold mt-3">{price}</p>
                </div>
            </div>
            </div>
            <ProductButton />
        </div>
    );
}

export default Product;