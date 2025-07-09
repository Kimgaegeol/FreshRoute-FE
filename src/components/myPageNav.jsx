function MyPageNav({ children }) {
    return (  
        <div className="flex flex-col justify-start items-center w-52 rounded-md bg-gray-200 p-6 ml-8">
            <h2 className="text-xl font-black pb-4">MY ROUTE</h2>
            {children}
        </div>
    );
}

export default MyPageNav;