import SignInput from '../../components/signInput'
import SignButton from '../../components/signButton'
import { useState } from "react"

function SigninPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("아이디", id);
        console.log("비밀번호", password)
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1 className='text-2xl font-bold pb-5'>login</h1>
                <SignInput 
                    placeholder="아이디를 입력하세요."
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                    
                    />
                <SignInput 
                    placeholder="비밀번호를 입력하세요."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                <SignButton>로그인</SignButton>
            </form>
        </div>
     );
}

export default SigninPage;