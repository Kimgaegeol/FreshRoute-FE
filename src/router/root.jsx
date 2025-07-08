import { Suspense } from "react";
import {
    createBrowserRouter,
} from "react-router";

import HomePage from "../pages/home";
import BucketPage from "../pages/bucket";
import EventListPage from "../pages/eventList";

import productRouter from "./product";
import accountRouter from './account';
import consumerMyRouter from "./my/consumer";
import farmerMyRouter from "./my/farmer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense><HomePage/></Suspense>
    },
    {
        path: "/bucket",
        element: <Suspense><BucketPage/></Suspense>
    },
    {
        path: "/eventlist",
        element: <Suspense><EventListPage/></Suspense>
    },
    productRouter(),
    accountRouter(),
    consumerMyRouter(),
    farmerMyRouter()
])

export default router;