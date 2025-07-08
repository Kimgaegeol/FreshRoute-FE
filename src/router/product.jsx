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
                    element: <Suspense><ProductDetailPage/></Suspense>
                },
                {
                    path: "list",
                    element: <Suspense><ProductListPage/></Suspense>
                },
                {
                    path: "pay",
                    element: <Suspense><PayPage/></Suspense>
                },
                {
                    path: "sale",
                    element: <Suspense><SalePage/></Suspense>
                }
            ]
        }
     );
}

export default productRouter;