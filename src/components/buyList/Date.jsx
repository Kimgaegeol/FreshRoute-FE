function Date({ children, onClick, isSelected }) {
    return (  
        <button 
            className={`w-32 h-12 border border-black
                ${isSelected ? 'bg-primary-500 text-white' : ''
            }`} onClick={onClick}>{children}
        </button>
    );
}

export default Date;