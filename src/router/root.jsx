import { Suspense } from "react";
import {
    createBrowserRouter,
} from "react-router";
import HomePage from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense><HomePage/></Suspense>
    }
])

export default router;