import { Suspense } from "react";
import {
    createBrowserRouter,
} from "react-router";
import HomePage from "../pages/home";
import productRouter from "./product";
import accountRouter from './account';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense><HomePage/></Suspense>
    },
    productRouter(),
    accountRouter()
])

export default router;