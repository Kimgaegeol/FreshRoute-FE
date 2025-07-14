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

    const logout = () => {
        setAccount({
            userID: "",
            userType: "",
            isLoggedIn: false
        });
    };

    return (
        <TestContext.Provider value={{
            account, 
            signIn, 
            logout,
            isLoggedIn: account.isLoggedIn,  // 직접 접근 가능하도록 추가
            userID: account.userID,          // 직접 접근 가능하도록 추가
            userType: account.userType       // 직접 접근 가능하도록 추가
        }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextWrapper;