function IconBox({ children }) {
    return (  
        <div className="bg-gray-200 w-72 h-52 m-4 rounded-3xl flex flex-col justify-center items-center">
            {children}
        </div>
    );
}

export default IconBox;