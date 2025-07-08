import { NavLink } from "react-router";

function Nav() {
    return (  
        <div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="flex">
                <NavLink to={'/'}>홈</NavLink>
            </div>
        </div>
    );
}

export default Nav;