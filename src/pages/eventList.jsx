import MainLayout from "../layouts/main";
import { Outlet } from "react-router";

function EventListPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default EventListPage;