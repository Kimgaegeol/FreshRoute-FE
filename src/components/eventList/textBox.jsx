function TextBox({ children }) {
    return (  
        <div className="bg-gray-200 w-[800px] h-52 m-4 rounded-3xl flex flex-col justify-center items-center">
            {children}
        </div>
    );
}

export default TextBox;