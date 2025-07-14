import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";
import Nav from "../../../components/myPage/Nav";
import NavButton from "../../../components/myPage/NavButton";
import { useState } from "react";

function ConsumerMyIndexPage() {
    const [selectedNav, setselectedNav] = useState('');
    return ( 
        <MainLayout>
            <div className="flex gap-10 items-start">
                <Nav>
                    <NavButton 
                        onClick={() => setselectedNav("myIndex")}
                        isSelected={selectedNav === "myIndex"}
                        to="/my/consumer"
                    >내 정보</NavButton>
                    <NavButton
                        onClick={() => setselectedNav("buyList")}
                        isSelected={selectedNav === "buyList"}
                        to="/my/consumer/buy/list"
                    >구매목록</NavButton>
                    <NavButton
                        onClick={() => setselectedNav("inquiryList")}
                        isSelected={selectedNav === "inquiryList"}
                        to="/my/consumer/inquiry/list"    
                    >문의내역</NavButton>
                    <NavButton 
                        onClick={() => setselectedNav("review")}
                        isSelected={selectedNav === "review"}
                        to="/my/consumer/review"
                    >리뷰관리</NavButton>
                </Nav>
                <Outlet />
            </div>
        </MainLayout>
     );
}

export default ConsumerMyIndexPage;