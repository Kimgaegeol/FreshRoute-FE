import MainLayout from "../layouts/main";
import { Outlet } from "react-router";

function HomePage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
     );
}

export default HomePage;