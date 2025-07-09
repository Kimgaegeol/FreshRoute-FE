import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";

function ConsumerMyIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default ConsumerMyIndexPage;