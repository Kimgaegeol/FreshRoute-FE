import { NavLink } from "react-router";

function MyPageNavButton({ children, to }) {
    return (  
        <NavLink to={to} className="flex flex-col justify-center items-center text-lg font-medium w-40 h-12 rounded-lg hover:bg-primary-500 hover:text-white">
            {children}   
        </NavLink>
    );
}

export default MyPageNavButton;