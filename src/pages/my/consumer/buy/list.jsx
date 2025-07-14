import { useState } from "react";
import Date from '../../../../components/buyList/data';
import Product from '../../../../components/buyList/product';

function ConsumerBuyListPage() {
    const [selectedDate, setselectedDate] = useState('');

    return ( 
        <div className="flex flex-col justify-start">
            <h1 className='text-2xl font-bold pb-5'>구매목록</h1>
            <div className="flex whitespace-nowrap">
                <Date 
                    onClick={() => setselectedDate("3years")}
                    isSelected={selectedDate === "3years"}
                    className="w-32 h-12 border border-black"
                >최대(3년)</Date>
                <Date 
                    onClick={() => setselectedDate("1month")}
                    isSelected={selectedDate === "1month"}
                    className="w-32 h-12 border border-black"
                >1개월</Date>
                <Date 
                    onClick={() => setselectedDate("3months")}
                    isSelected={selectedDate === "3months"}
                    className="w-32 h-12 border border-black"
                >3개월</Date>
                <Date
                    onClick={() => setselectedDate("6months")}
                    isSelected={selectedDate === "6months"} 
                    className="w-32 h-12 border border-black"
                >6개월</Date>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <Product
                        date="25.05.27 (화)"
                        product="사과 (5알)"
                        description="껍질 째 먹어도 되는 사과"
                        price="6,000원"
                    ></Product>
                </div>
                <div className="flex">
                    <Product
                        date="25.05.27 (화)"
                        product="사과 (5알)"
                        description="껍질 째 먹어도 되는 사과"
                        price="6,000원"
                    ></Product>
                </div>
            </div>
        </div>
     );
}

export default ConsumerBuyListPage;