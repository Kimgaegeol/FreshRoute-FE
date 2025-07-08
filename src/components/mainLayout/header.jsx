import { NavLink } from "react-router";
import { IoSearch } from "react-icons/io5";

function Header() {
    return (  
        <div>
            {/* 상단 초록색 부분 */}
            <div className="w-full h-10 flex justify-end items-center px-4 gap-3 text-white text-sm bg-primary-500">
                <div><NavLink to={'/signin'}>로그인</NavLink></div>
                <div className="h-5 border-l bg-white"></div>
                <div><NavLink to={'/signup'}>회원가입</NavLink> </div>
                <div className="h-5 border-l bg-white"></div>
                <div><NavLink to={'/mypage'}>마이페이지</NavLink> </div>
            </div>
            {/* 하단 로고 + 검색창 부분 */}
            <div className="w-full h-20 flex justify-start items-center px-8 gap-10">
                <div className="flex-1">
                    <img src="/FreshRouterLogo.png" alt="FreshRouter logo" className="h-14 flex-1"/>
                </div>
                {/* 검색창 + 검색 아이콘 */}
                <div className="flex flex-1 justify-center gap-5">
                    <input type="text" placeholder="검색어를 입력하세요" className="w-96 h-10 pl-4 border border-primary-500 rounded-lg focus:outline-none focus:placeholder-transparent"/>
                    <div className="w-10 h-10 bg-primary-500 rounded-full p-3 flex justify-center items-center cursor-pointer">
                        <IoSearch className="w-6 h-6 text-white"></IoSearch>
                    </div>
                </div>
                {/* 오른쪽 빈 공간 */}
                <div className="flex-1"></div>
            </div>

        </div>
    );
}

export default Header;