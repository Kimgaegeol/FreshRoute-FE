import { lazy, Suspense } from "react";
import AccountIndexPage from "../pages/account";

const SigninPage = lazy(() => import("../pages/account/signin"))
const SignupConsumerPage = lazy(() => import("../pages/account/signup/consumer"))
const SignupFarmerPage = lazy(() => import("../pages/account/signup/farmer"))
const SearchIdPage = lazy(() => import("../pages/account/search/id"))
const SearchPwPage = lazy(() => import("../pages/account/search/pw"))

function accountRouter() {
    return ( 
        {
            path: "/account",
            Component: AccountIndexPage,
            children: [
                {
                    path: "signin",
                    element: <Suspense><SigninPage/></Suspense>
                },
                {
                    path: "signup/consumer",
                    element: <Suspense><SignupConsumerPage/></Suspense>
                },
                {
                    path: "signup/farmer",
                    element: <Suspense><SignupFarmerPage/></Suspense>
                },
                {
                    path: "search/id",
                    element: <Suspense><SearchIdPage/></Suspense>
                },
                {
                    path: "search/pw",
                    element: <Suspense><SearchPwPage/></Suspense>
                }
            ]
        }
     );
}

export default accountRouter;