import { NavLink } from "react-router";
import { Navigate } from "react-router";

import { IoSearch } from "react-icons/io5";

function Header() {
    return (  
        <div>
            {/* 상단 초록색 부분 */}
            <div className="w-full h-10 flex justify-end items-center px-4 gap-3 text-white text-sm bg-primary-500">
                <div><NavLink to={'/account/signin'}>로그인</NavLink></div>
                <div className="h-5 border-l bg-white"></div>
                <div><NavLink to={'/account/signup/consumer'}>소비자 회원가입</NavLink> </div>
                <div className="h-5 border-l bg-white"></div>
                <div><NavLink to={'/account/signup/farmer'}>농가 회원가입</NavLink> </div>
                <div className="h-5 border-l bg-white"></div>
                <div><NavLink to={'/mypage'}>마이페이지</NavLink> </div>
            </div>

            {/* 하단 로고 + 검색창 부분 */}
            <div className="w-full h-20 flex justify-center items-center px-10">
                <img src="/FreshRouterLogo.png" alt="FreshRouter logo" className="h-14"/>
            </div>
        </div>
    );
}

export default Header;