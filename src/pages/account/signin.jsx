import SignInput from '../../components/sign/signInput'
import SignButton from '../../components/sign/signButton'
import { useContext, useState } from "react"
import { useNavigate } from 'react-router';
import { signInEvent } from '../../apis/account'
import { TestContext } from '../../store/testContext';

function SigninPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // TestContext에서 signIn 가져오기
    const { signIn } = useContext(TestContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!id || !password) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }

        setIsLoading(true);
        
        try {
            // signInEvent는 백엔드 응답의 user 객체를 반환해야 함
            const userData = await signInEvent({ id, pw: password });
            console.log("로그인 성공:", userData);

            // 백엔드에서 받은 user 객체를 그대로 전달
            // userData가 이미 user 객체 형태라면
            signIn(userData);
            
            // 만약 signInEvent가 response 전체를 반환한다면
            // signIn(userData.user);

            alert("로그인 성공!");
            navigate('/');
            
        } catch (error) {
            console.error("로그인 실패:", error.message);
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
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
                <SignButton 
                    type="submit"
                    disabled={isLoading}
                >{isLoading ? "로그인 중..." : "로그인"}
                </SignButton>
            </form>
        </div>
    );
}

export default SigninPage;