import { Outlet } from "react-router";
import MainLayout from "../../layouts/main";

function AccountIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default AccountIndexPage;