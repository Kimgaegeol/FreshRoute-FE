import { NavLink } from "react-router";

function NavButton({ children, to, isSelected, onClick }) {
    return (  
        <NavLink to={to} className={`flex flex-col justify-center items-center text-lg font-medium w-40 h-12 rounded-lg hover:bg-primary-500 hover:text-white ${
            isSelected ? 'bg-primary-500 text-white' : ''
        }`} onClick={onClick} >
            {children}   
        </NavLink>
    );
}

export default NavButton;