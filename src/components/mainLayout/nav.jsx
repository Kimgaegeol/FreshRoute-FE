import { NavLink } from "react-router";
import { useContext } from "react";
import { TestContext } from '../../store/testContext';
import { useState } from "react";

function Nav() {
    const { account } = useContext(TestContext);
    const isFarmer = account.userType === 'farmer';
    const [selectNav, setSelectNav] = useState("");

    // 테스트용
    const { signIn, logout } = useContext(TestContext);

    // 공통 스타일 함수
    const getNavLinkClass = (isActive) => 
        `text-lg font-bold whitespace-nowrap ${
            isActive ? 'border-b-4 border-primary-500' : ''
        }`;

    // 로그인하지 않았을 때
    if (!account.isLoggedIn) {
        return (
            <div>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="flex gap-20 pl-20 py-4">
                    <NavLink 
                        to={'/'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >홈</NavLink>
                    <NavLink 
                        to={'/product'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >전체 농산물</NavLink>
                    <NavLink 
                        to={'/eventlist'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >이벤트 기획전</NavLink>
                    {/* 테스트용 버튼 */}
                    <button onClick={() => signIn("consumer", "consumer")}>소비자로그인</button>
                    <button onClick={() => signIn("farmer", "farmer")}>농가로그인</button>
                </div>
                <div className="w-full h-px bg-primary-500 pb-1"></div>
            </div>
        )
    }

    return (  
        <div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="flex gap-20 pl-20 py-4">
                {isFarmer ? (
                    <>
                    {/* 농가일 때 */}
                    <NavLink 
                        to={'/product'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >전체 농산물</NavLink>
                    <NavLink 
                        to={'/eventlist'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >이벤트 기획전</NavLink>
                    <NavLink 
                        to={'/product/sale'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >상품등록</NavLink>
                    <NavLink 
                        to={'/my/farmer'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >마이페이지</NavLink>
                    </>
                ) : (
                    <>
                    {/* 소비자일 때 */}
                    <NavLink 
                        to={'/'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >홈</NavLink>
                    <NavLink 
                        to={'/product'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >전체 농산물</NavLink>
                    <NavLink 
                        to={'/eventlist'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >이벤트 기획전</NavLink>
                    <NavLink 
                        to={'/bucket'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >장바구니</NavLink>
                    <NavLink 
                        to={'/my/consumer'} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >마이페이지</NavLink>
                    </>
                )}
                {/* 테스트용 버튼 */}
                <button onClick={() => signIn("consumer", "consumer")}>소비자로 변경</button>
                <button onClick={() => signIn("farmer", "farmer")}>농가로 변경</button>
                <button onClick={() => logout()}>로그아웃</button>
            </div>
            <div className="w-full h-px bg-primary-500 pb-1"></div>
        </div>
    );
}

export default Nav;