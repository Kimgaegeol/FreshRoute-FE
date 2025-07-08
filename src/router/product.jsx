import { lazy, Suspense } from "react";
import ProductIndexPage from "../pages/product";

const ProductDetailPage = lazy(() => import("../pages/product/detail"))
const ProductListPage = lazy(() => import("../pages/product/list"))
const PayPage = lazy(() => import("../pages/product/pay"))
const SalePage = lazy(() => import("../pages/product/sale"))

function productRouter() {
    return ( 
        {
            path: "/product",
            Component: ProductIndexPage,
            children: [
                {
                    path: ":pno",
                    elment: <Suspense><ProductDetailPage/></Suspense>
                },
                {
                    path: "list",
                    elment: <Suspense><ProductListPage/></Suspense>
                },
                {
                    path: "pay",
                    elment: <Suspense><PayPage/></Suspense>
                },
                {
                    path: "sale",
                    elment: <Suspense><SalePage/></Suspense>
                }
            ]
        }
     );
}

export default productRouter;