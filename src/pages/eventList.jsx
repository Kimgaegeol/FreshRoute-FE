import MainLayout from "../layouts/main";
import { Outlet } from "react-router";
import { HiOutlineTicket } from "react-icons/hi2";
import IconBox from '../components/eventList/iconBox';
import { BsBoxSeam } from "react-icons/bs";
import { PiPencilLine } from "react-icons/pi";
import TextBox from '../components/eventList/textBox';

function EventListPage() {
    return ( 
        <div>
            <MainLayout>
                <Outlet/>
                <div className="flex flex-col items-center">
                    <h1 className='text-2xl font-bold m-6'>이벤트 기획전</h1>
                    <h2 className="text-lg m-4">지금 당장 만날 수 있는 여러가지 혜택들</h2>

                    {/* 상단 아이콘 3개 */}
                    <div className="flex flex-row">
                        <IconBox>
                            <HiOutlineTicket className="text-7xl" />
                            <p className="text-lg font-bold mt-3">신규회원 할인쿠폰 이벤트</p>
                            <p>07.01 ~ 07.10</p>
                        </IconBox>
                        <IconBox>
                            <BsBoxSeam className="text-7xl" />
                            <p className="text-lg font-bold mt-3">농산물 랜덤박스 이벤트</p>
                            <p>07.01 ~ 07.15</p>
                        </IconBox>
                        <IconBox>
                            <PiPencilLine className="text-7xl" />
                            <p className="text-lg font-bold mt-3">우수구매후기 작성 이벤트</p>
                            <p>07.01 ~ 07.25</p>
                        </IconBox>
                    </div>

                    {/* 신규회원 할인쿠폰 이벤트 */}
                    <h1 className='text-3xl font-bold mt-20 mb-4'>신규회원 할인쿠폰 이벤트</h1>
                    <TextBox>
                        <p className="text-lg mb-2">지금 FreshRoute에 가입하면 바로 사용 가능한 5,000원 할인 쿠폰을 드립니다.</p>
                        <p className="text-lg mb-2">농가도 살리고, 내 지갑도 살리는 첫 소비를 시작해보세요!</p>
                        <p className="text-lg">가입 ▶ 쿠폰 지급 ▶ 바로 사용</p>
                    </TextBox>
                    <div className="flex flex-col items-center gap-3 m-4">
                        <p className="text-xl font-bold">진행기간</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                        <p className="text-xl">25.07.01 (화) ~ 25.07.10 (목)</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                    </div>
                    <div className="flex flex-col m-4">
                        <p>※ 쿠폰은 가입일로부터 7일 이내 사용 가능하며, 2만 원 이상 구매 시 적용됩니다.</p>
                        <p>※ 쿠폰은 가입 즉시 자동 발급됩니다.</p>
                        <p>※ 쿠폰은 중복 적용 불가합니다.</p>
                        <p>※ 주문 취소 시 사용한 쿠폰은 복원되지 않습니다.</p>
                    </div>

                    {/* 농산물 랜덤박스 이벤트 */}
                    <h1 className='text-3xl font-bold mt-20 mb-4'>농산물 랜덤박스 이벤트</h1>
                    <TextBox>
                        <p className="text-lg mb-2">어떤 상품이 올지 모르는 랜덤박스를 여는 설레는 경험을 느낄 수 있습니다</p>
                        <p className="text-lg mb-2">정가 대비 최대 50% 할인 혜택!</p>
                        <p className="text-lg">지구를 지키는 소비, 농가를 응원하는 마음을 담아 랜덤박스를 만나보세요.</p>
                    </TextBox>
                    <div className="flex flex-col items-center gap-3 m-4">
                        <p className="text-xl font-bold">진행기간</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                        <p className="text-xl">25.07.01 (화) ~ 25.07.15 (일)</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                    </div>
                    <div className="flex flex-col items-center gap-3 m-4">
                        <p className="text-xl font-bold">내용</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                        <p className="text-xl">만원 랜덤박스</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                        <p className="text-xl font-bold">구성</p>
                        <p className="text-lg">상추, 깻잎 등 쌈 채소류 (한 팩)</p>
                        <p className="text-lg">감자, 양파, 당근 (2~3개)</p>
                        <p className="text-lg">사과, 감귤, 바나나, 오렌지 (소포장)</p>
                        <p className="text-lg">쪽파 or 대파 or 마늘 (한 단)</p>
                        <p className="text-lg">파프리카, 오이, 가지 (2~3개)</p>
                        <p className="text-lg mb-5">브로콜리, 애호박, 단호박 (2~3개)</p>
                        <p className="text-lg">만원 랜덤박스 : 2종 선택</p>
                        <p className="text-lg">2만원 랜덤박스 : 4종 선택</p>
                    </div>

                    {/* 우수구매후기 작성 이벤트 */}
                    <h1 className='text-3xl font-bold mt-20 mb-4'>우수구매후기 작성 이벤트</h1>
                    <TextBox>
                        <p className="text-lg mb-2">사진 + 정성 리뷰를 남겨주신 우수 고객님께 10,000원 할인 쿠폰을 드립니다.</p>
                        <p className="text-lg mb-2">여러분의 소중한 후기가 더 많은 소비자에게 착한 소비의 가치를 전합니다.</p>
                        <p className="text-lg">모두가 함꼐 웃는 착한 소비, 지금 리뷰를 함께해요!</p>
                    </TextBox>
                    <div className="flex flex-col items-center gap-3 m-4">
                        <p className="text-xl font-bold">진행기간</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                        <p className="text-xl">25.07.01 (화) ~ 25.07.25 (일)</p>
                        <div className="w-96 h-0.5 bg-black"></div>
                    </div>
                    <div className="flex flex-col m-4">
                        <p>※ 리뷰를 작성하시면 자동으로 응모됩니다</p>
                        <p>※ 매주 선정하여 할인 쿠폰을 지급합니다.</p>
                        <p>※ 쿠폰은 중복 적용 불가합니다.</p>
                        <p>※ 참여자 전원 500원 즉시 적립됩니다.</p>
                    </div>    
                </div>
            </MainLayout>
        </div>
     );
}

export default EventListPage;