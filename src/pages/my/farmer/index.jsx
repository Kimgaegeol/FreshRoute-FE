import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";
import Nav from "../../../components/myPage/Nav";
import NavButton from "../../../components/myPage/NavButton";
import { useState } from "react";

function FarmerMyIndexPage() {
    const [selectedNav, setselectedNav] = useState('');
    return ( 
        <MainLayout>
            <div className="flex gap-10 items-start">
                <Nav>
                    <NavButton
                        onClick={() => setselectedNav("farmerIndex")}
                        isSelected={selectedNav === "farmerIndex"}
                        to="/my/farmer"
                    >내 정보</NavButton>
                    <NavButton
                        onClick={() => setselectedNav("saleList")}
                        isSelected={selectedNav === "saleList"}
                        to="/my/farmer/salelist"
                    >판매목록</NavButton>
                    <NavButton 
                        onClick={() => setselectedNav("orderList")}
                        isSelected={selectedNav === "orderList"}
                        to="/my/farmer/orderlist"
                    >주문관리</NavButton>
                    <NavButton 
                        onClick={() => setselectedNav("inquiryList")}
                        isSelected={selectedNav === "inquiryList"}
                        to="/my/farmer/inquiry/list"
                    >문의확인</NavButton>
                    <NavButton
                        onClick={() => setselectedNav("Fertilizer")}
                        isSelected={selectedNav === "Fertilizer"}
                        to="/my/farmer/fertilizer-conversion"
                    >비료전환</NavButton>
                    </Nav>
                <Outlet />
            </div>
        </MainLayout>
     );
}

export default FarmerMyIndexPage;
