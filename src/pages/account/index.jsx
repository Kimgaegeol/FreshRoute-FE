import MainLayout from "../../layouts/main";
import { Outlet } from "react-router";

function AccountIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet />
            </MainLayout>
        </div>
     );
}

export default AccountIndexPage;
