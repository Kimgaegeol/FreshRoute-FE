import MainLayout from "../layouts/main";
import { Outlet } from "react-router";
import ProductItem from "../components/common/productItem";

function BucketPage() {
    return ( 
        <div>
            <MainLayout>
                <div className="mx-10">
                    <h1 className='text-2xl font-bold'>장바구니</h1>
                    <ProductItem 
                        product = "사과 (5알)"
                        description = "껍질 째 먹어도 되는 사과"
                        count = "1개"
                        percent = "20%"
                        originalPrice = "8,000"
                        discountPrice = "6,000"
                        buttonTitle = "삭제"
                    />
                    <ProductItem 
                        product = "사과 (5알)"
                        description = "껍질 째 먹어도 되는 사과"
                        count = "1개"
                        percent = "20%"
                        originalPrice = "8,000"
                        discountPrice = "6,000"
                        buttonTitle = "삭제"
                    />
                </div>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default BucketPage;