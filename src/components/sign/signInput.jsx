function SignInput({ placeholder, type = "text", value, onChange, ...props }) {
    return (  
        <input 
            type={type}
            className='w-96 h-12 m-3 pl-4 border-2 border-gray-400 rounded-lg focus:border-black'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />  
    );
}

export default SignInput;