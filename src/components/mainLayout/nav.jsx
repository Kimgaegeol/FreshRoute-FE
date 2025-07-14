import { NavLink } from "react-router";
import { useContext } from "react";
import { TestContext } from '../../store/testContext';

function Nav() {
    const { account } = useContext(TestContext);
    const isFarmer = account.isFarmer; // userType 대신 isFarmer 사용

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
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >홈</NavLink>
                    <NavLink 
                        to={'/product'} 
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >전체 농산물</NavLink>
                    <NavLink 
                        to={'/eventlist'} 
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >이벤트 기획전</NavLink>
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
                        to={'/'}
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >홈</NavLink>
                    <NavLink 
                        to={'/product'} 
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >전체 농산물</NavLink>
                    <NavLink 
                        to={'/eventlist'}
                        end 
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
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >홈</NavLink>
                    <NavLink 
                        to={'/product'} 
                        end
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >전체 농산물</NavLink>
                    <NavLink 
                        to={'/eventlist'}
                        end
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
            </div>
            <div className="w-full h-px bg-primary-500 pb-1"></div>
        </div>
    );
}

export default Nav;