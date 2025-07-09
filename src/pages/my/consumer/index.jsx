import { Outlet } from "react-router";
import MainLayout from "../../../layouts/main";
import MyPageNav from "../../../components/myPageNav";
import MyPageNavButton from "../../../components/myPageNavButton";

function ConsumerMyIndexPage() {
    return ( 
        <div>
            <MainLayout>
                <MyPageNav>
                    <MyPageNavButton to="/my/consumer">내 정보</MyPageNavButton>
                    <MyPageNavButton to="/my/consumer/buy/list">구매목록</MyPageNavButton>
                    <MyPageNavButton to="/my/consumer/inquiry/list">문의내역</MyPageNavButton>
                    <MyPageNavButton to="/my/consumer/review">리뷰관리</MyPageNavButton>
                </MyPageNav>
                <Outlet />
            </MainLayout>
        </div>
     );
}

export default ConsumerMyIndexPage;