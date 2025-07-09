function SignButton({ children }) {
    return (  
        <button 
            className="w-96 h-12 mt-5 rounded-lg bg-primary-500 text-white"
        >{children}</button>
    );
}

export default SignButton;