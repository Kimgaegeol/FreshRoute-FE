import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

import FarmerMyIndexPage from "../../pages/my/farmer";

const FarmerInquiryDetailPage = lazy(() => import("../../pages/my/farmer/inquiry/detail"))
const FarmerInquiryListPage = lazy(() => import("../../pages/my/farmer/inquiry/detail"))
const FarmerInfoPage = lazy(() => import("../../pages/my/farmer/inquiry/detail"))
const FarmerOrderListPage = lazy(() => import("../../pages/my/farmer/inquiry/detail"))
const FarmerSaleListPage = lazy(() => import("../../pages/my/farmer/inquiry/detail"))

function farmerMyRouter() {
    return ( 
        {
            path: "my/farmer",
            Component: FarmerMyIndexPage,
            children: [
                {
                    path: "",
                    element: <Navigate to={'/my/farmer/info'}/>
                },
                {
                    path: "info",
                    elment: <Suspense><FarmerInfoPage/></Suspense>
                },
                                {
                    path: "orderlist",
                    elment: <Suspense><FarmerOrderListPage/></Suspense>
                },
                                {
                    path: "salelist",
                    elment: <Suspense><FarmerSaleListPage/></Suspense>
                },
                                {
                    path: "inquiry/list",
                    elment: <Suspense><FarmerInquiryListPage/></Suspense>
                },
                                {
                    path: "inquiry/:ino",
                    elment: <Suspense><FarmerInquiryDetailPage/></Suspense>
                }
            ]
        }
     );
}

export default farmerMyRouter;