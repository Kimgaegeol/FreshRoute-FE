import { createContext, useState } from "react";

export const TestContext = createContext();

function TestContextWrapper({children}){
    const [account, setAccount] = useState({
        idx: null,
        userID: "",
        userName: "",
        email: "",
        phone: "",
        isFarmer: false,
        isLoggedIn: false
    })

    const signIn = (userData) => {
        // 백엔드에서 받은 user 객체를 그대로 사용
        setAccount({
            idx: userData.idx,
            userID: userData.id,
            userName: userData.name,
            email: userData.email,
            phone: userData.phone,
            isFarmer: userData.is_farmer,
            isLoggedIn: true
        });
    };

    const logout = () => {
        setAccount({
            idx: null,
            userID: "",
            userName: "",
            email: "",
            phone: "",
            isFarmer: false,
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
            userName: account.userName,      // 직접 접근 가능하도록 추가
            isFarmer: account.isFarmer      // 직접 접근 가능하도록 추가
        }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextWrapper;