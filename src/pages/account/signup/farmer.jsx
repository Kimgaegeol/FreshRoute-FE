import SignInput from '../../../components/sign/signInput'
import SignButton from '../../../components/sign/signButton'
import { useState } from "react"
import { signUpFarmerEvent } from '../../../apis/account'

function FarmerSignupPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [farmName, setFarmName] = useState("");
    const [farmAddress, setFarmAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!id || !password || !name || !email || !number || !farmName || !farmAddress) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        setIsLoading(true);
        
        try {
            const account = await signUpFarmerEvent({ 
                id, 
                pw: password, 
                name, 
                email, 
                phone: number, 
                farm_name: farmName, 
                farm_address: farmAddress 
            });
            console.log("농가 회원가입 성공:", account);
            
            // 회원가입 성공 시 처리 (예: 로그인 페이지로 이동)
            // navigate('/signin') 또는 window.location.href = '/signin'
            alert("농가 회원가입 성공!");
            
        } catch (error) {
            console.error("농가 회원가입 실패:", error.message);
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1 className='text-2xl font-bold pb-5'>농가 회원가입</h1>
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
                    disabled={isLoading}
                />
                <p className='font-bold p-3'>농가 정보</p>
                <SignInput 
                    placeholder="농가명을 입력하세요."
                    type="text"
                    value={farmName}
                    onChange={(e) => setFarmName(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <SignInput 
                    placeholder="농가주소를 입력하세요."
                    type="text"
                    value={farmAddress}
                    onChange={(e) => setFarmAddress(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <SignButton disabled={isLoading}>
                    {isLoading ? "회원가입 중..." : "회원가입"}
                </SignButton>
            </form>
        </div>
     );
}

export default FarmerSignupPage;