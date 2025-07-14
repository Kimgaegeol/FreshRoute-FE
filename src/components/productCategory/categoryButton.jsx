function CategoryButton({ children, isSelected, onClick }) {
    return (  
        <button 
            className={`px-10 py-3 rounded-xl whitespace-nowrap 
                ${isSelected ? 'bg-primary-400' : 'bg-gray-200'
            }`} onClick={onClick}>{children}

        </button>
    );
}

export default CategoryButton;