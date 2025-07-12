import MainLayout from "../layouts/main";
import { Outlet } from "react-router";
import CategoryButton from '../components/home/categoryButton';
import { useState } from "react";

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