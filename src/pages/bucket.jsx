import MainLayout from "../layouts/main";
import { Outlet } from "react-router";

function BucketPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default BucketPage;