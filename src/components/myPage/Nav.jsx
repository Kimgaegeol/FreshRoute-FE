function Nav({ children }) {
    return (  
        <div className="flex flex-col justify-start items-center w-52 gap-1 rounded-md bg-gray-100 p-6">
            <h2 className="text-xl font-black pb-4">MY ROUTE</h2>
            {children}
        </div>
    );
}

export default Nav;