import { NavLink } from "react-router";
import { useContext } from "react";
import { TestContext } from "../../store/testContext";

function Header() {
    const { account, logout } = useContext(TestContext);

    return (  
        <div>
            {/* 상단 초록색 부분 */}
            <div className="w-full h-10 flex justify-end items-center px-4 gap-3 text-white text-sm bg-primary-500">
                {account.isLoggedIn ? (
                    // 로그인된 상태
                    <>
                        <div className="text-white">
                            {account.userName}님 환영합니다! {account.isFarmer && "(농가)"}
                        </div>
                        <div className="h-5 border-l bg-white"></div>
                        <button 
                            className="text-white hover:text-gray-200 transition-colors"
                            onClick={logout}
                        >로그아웃</button>
                    </>
                ) : (
                    <>
                        <div>
                            <NavLink 
                                to={'/account/signin'}
                                className="hover:text-gray-200 transition-colors"
                            >
                                로그인
                            </NavLink>
                        </div>
                        <div className="h-5 border-l bg-white"></div>
                        <div>
                            <NavLink 
                                to={'/account/signup/consumer'}
                                className="hover:text-gray-200 transition-colors"
                            >  
                                소비자 회원가입
                            </NavLink> 
                        </div>
                        <div className="h-5 border-l bg-white"></div>
                        <div>
                            <NavLink 
                                to={'/account/signup/farmer'}
                                className="hover:text-gray-200 transition-colors"
                            >
                                농가 회원가입
                            </NavLink> 
                        </div>
                    </>
                )}
            </div>

            {/* 하단 로고 부분 */}
            <NavLink to={'/'} className="w-full h-20 flex justify-center items-center px-10">
                <img src="/FreshRouterLogo.png" alt="FreshRouter logo" className="h-14"/>
            </NavLink>
        </div>
    );
}

export default Header;