import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";
import MyPageNav from "../../../components/myPageNav";
import MyPageNavButton from "../../../components/myPageNavButton";

function FarmerMyIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <MyPageNav>
                    <MyPageNavButton to="/my/farmer">내 정보</MyPageNavButton>
                    <MyPageNavButton to="/my/farmer/salelist">판매목록</MyPageNavButton>
                    <MyPageNavButton to="/my/farmer/orderlist">주문관리</MyPageNavButton>
                    <MyPageNavButton to="/my/farmer/inquiry/list">문의확인</MyPageNavButton>
                    <MyPageNavButton>비료전환</MyPageNavButton>
                </MyPageNav>
                 <Outlet />
            </MainLayout>
        </div>
     );
}

export default FarmerMyIndexPage;
