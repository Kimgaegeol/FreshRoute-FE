import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

import ConsumerMyIndexPage from "../../pages/my/consumer";

const ConsumerInfoPage = lazy(() => import("../../pages/my/consumer/info"))
const ConsumerReviewPage = lazy(() => import("../../pages/my/consumer/review"))
const ConsumerBuyDetailage = lazy(() => import("../../pages/my/consumer/buy/detail"))
const ConsumerBuyInquiryWritePage = lazy(() => import("../../pages/my/consumer/buy/inquiryWrite"))
const ConsumerBuyListPage = lazy(() => import("../../pages/my/consumer/buy/list"))
const ConsumerBuyReviewWritePage = lazy(() => import("../../pages/my/consumer/buy/reviewWrite"))
const ConsumerInquiryListReadPage = lazy(() => import("../../pages/my/consumer/inquiry/list"))
const ConsumerInquiryDetailReadPage = lazy(() => import("../../pages/my/consumer/inquiry/detail"))

function consumerMyRouter() {
    return ( 
        {
            path: "/my/consumer",
            Component: ConsumerMyIndexPage,
            children: [
                {
                    path: "",
                    element: <Navigate to={'/my/consumer/info'}/>
                },
                {
                    path: "info",
                    element: <Suspense><ConsumerInfoPage/></Suspense>
                },
                {
                    path: "review",
                    element: <Suspense><ConsumerReviewPage/></Suspense>
                },
                {
                    path: "buy/:pno",
                    element: <Suspense><ConsumerBuyDetailage/></Suspense>
                },
                {
                    path: "buy/inquiry-write",
                    element: <Suspense><ConsumerBuyInquiryWritePage/></Suspense>
                },
                {
                    path: "buy/list",
                    element: <Suspense><ConsumerBuyListPage/></Suspense>
                },
                {
                    path: "buy/review-write",
                    element: <Suspense><ConsumerBuyReviewWritePage/></Suspense>
                },
                {
                    path: "inquiry/list",
                    element: <Suspense><ConsumerInquiryListReadPage/></Suspense>
                },
                {
                    path: "inquiry/:ino",
                    element: <Suspense><ConsumerInquiryDetailReadPage/></Suspense>
                }
            ]
        }
     );
}

export default consumerMyRouter;