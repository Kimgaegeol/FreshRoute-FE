import { Outlet } from "react-router";
import MainLayout from "../../layouts/main";

function ProductIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default ProductIndexPage;