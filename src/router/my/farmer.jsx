import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

import FarmerMyIndexPage from "../../pages/my/farmer";

const FarmerInquiryDetailPage = lazy(() => import("../../pages/my/farmer/inquiry/detail"))
const FarmerInquiryListPage = lazy(() => import("../../pages/my/farmer/inquiry/list"))
const FarmerInfoPage = lazy(() => import("../../pages/my/farmer/info"))
const FarmerOrderListPage = lazy(() => import("../../pages/my/farmer/orderList"))
const FarmerSaleListPage = lazy(() => import("../../pages/my/farmer/saleList"))
const FertilizerConversionPage = lazy(() => import("../../pages/my/farmer/fertilizerConversion"))

function farmerMyRouter() {
    return ( 
        {
            path: "/my/farmer",
            Component: FarmerMyIndexPage,
            children: [
                {
                    path: "",
                    element: <Navigate to={'/my/farmer/info'}/>
                },
                {
                    path: "info",
                    element: <Suspense><FarmerInfoPage/></Suspense>
                },
                {
                    path: "orderlist",
                    element: <Suspense><FarmerOrderListPage/></Suspense>
                },
                {
                    path: "salelist",
                    element: <Suspense><FarmerSaleListPage/></Suspense>
                },
                {
                    path: "inquiry/list",
                    element: <Suspense><FarmerInquiryListPage/></Suspense>
                },
                {
                    path: "inquiry/:ino",
                    element: <Suspense><FarmerInquiryDetailPage/></Suspense>
                },
                {
                    path: "fertilizer-conversion",
                    element: <Suspense><FarmerInquiryDetailPage/></Suspense>
                }
            ]
        }
     );
}

export default farmerMyRouter;