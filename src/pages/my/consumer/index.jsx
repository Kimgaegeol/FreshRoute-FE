import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";
import Nav from "../../../components/myPage/Nav";
import NavButton from "../../../components/myPage/NavButton";

function ConsumerMyIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <Nav>
                    <NavButton to="/my/consumer">내 정보</NavButton>
                    <NavButton to="/my/consumer/buy/list">구매목록</NavButton>
                    <NavButton to="/my/consumer/inquiry/list">문의내역</NavButton>
                    <NavButton to="/my/consumer/review">리뷰관리</NavButton>
                </Nav>
                <Outlet />
            </MainLayout>
        </div>
     );
}

export default ConsumerMyIndexPage;