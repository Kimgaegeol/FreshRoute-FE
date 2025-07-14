import SignInput from '../../../components/sign/signInput'
import SignButton from '../../../components/sign/signButton'
import { useState } from "react"
import { useNavigate } from 'react-router';
import { signUpConsumerEvent } from '../../../apis/account'

function ConsumerSignupPage() {
    // 회원가입
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // 버튼 이동
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("▶ handleSubmit 호출", { id, email });
        if (!id || !password || !name || !email || !number) {
            alert("모든 필수 필드를 입력해주세요.");
            return;
        }

        setIsLoading(true);
        
        try {
            const user = await signUpConsumerEvent({ 
                id, 
                pw: password, 
                name, 
                email, 
                phone: number 
            });
            
            // 회원가입 성공 시 처리 (예: 로그인 페이지로 이동)
            // navigate('/signin') 또는 window.location.href = '/signin'
            alert("회원가입 성공!");
            navigate('/account/signin');
        } catch (error) {
            console.error("회원가입 실패:", error.message);
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
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
                    disabled={isLoading}
                />
                <SignInput 
                    placeholder="비밀번호를 입력하세요."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <SignInput 
                    placeholder="이름을 입력하세요."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <SignInput 
                    placeholder="이메일을 입력하세요."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <SignInput 
                    placeholder="전화번호를 입력하세요."
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    />
                <SignButton disabled={isLoading}>
                    {isLoading ? "회원가입 중..." : "회원가입"}
                </SignButton>
            </form>
        </div>
     );
}

export default ConsumerSignupPage;