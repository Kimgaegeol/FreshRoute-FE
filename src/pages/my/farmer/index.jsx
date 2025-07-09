import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";

function FarmerMyIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default FarmerMyIndexPage;

// mainlayout, 왼쪽 nav index에 등록하기 