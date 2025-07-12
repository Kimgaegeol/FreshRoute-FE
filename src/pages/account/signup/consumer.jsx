// id, pw, name, email, phone
import SignInput from '../../../components/sign/signInput'
import SignButton from '../../../components/sign/signButton'
import { useState } from "react"

function ConsumerSignupPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("아이디", id);
        console.log("비밀번호", password);
        console.log("이름", name);
        console.log("이메일", email);
        console.log("전화번호", number);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1 className='text-2xl font-bold pb-5'>소비자 회원가입</h1>
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
                <SignInput 
                    placeholder="이름을 입력하세요."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                <SignInput 
                    placeholder="이메일을 입력하세요."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                <SignInput 
                    placeholder="전화번호를 입력하세요."
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    />
                <SignButton>회원가입</SignButton>
            </form>
        </div>
     );
}

export default ConsumerSignupPage;