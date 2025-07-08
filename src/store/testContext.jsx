import { createContext, useState } from "react";

export const TestContext = createContext();

function TestContextWrapper({children}){
    const [account, setAccount] = useState({
        userID: "",
        userType: "",
        isLoggedIn: false
    })

    const signIn = (userID, userType) => {
        setAccount({
            userID: userID,
            userType: userType,
            isLoggedIn: true
        });
    };

    const logout = (userID, userType) => {
        setAccount({
            userID: "",
            userType: "",
            isLoggedIn: false
        });
    };

    return (
        <TestContext.Provider value={{account, signIn, logout}}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextWrapper;
