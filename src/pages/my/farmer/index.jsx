import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";
import Nav from "../../../components/myPage/Nav";
import NavButton from "../../../components/myPage/NavButton";

function FarmerMyIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Nav>
                    <NavButton to="/my/farmer">내 정보</NavButton>
                    <NavButton to="/my/farmer/salelist">판매목록</NavButton>
                    <NavButton to="/my/farmer/orderlist">주문관리</NavButton>
                    <NavButton to="/my/farmer/inquiry/list">문의확인</NavButton>
                    <NavButton>비료전환</NavButton>
                </Nav>
                 <Outlet />
            </MainLayout>
        </div>
     );
}

export default FarmerMyIndexPage;
