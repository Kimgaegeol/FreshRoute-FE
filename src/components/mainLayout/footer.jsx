function Footer() {
    return (  
        <div>
            <div className="w-full h-1 bg-primary-500"></div>
            <div className="flex justify-center gap-5 m-3">
                <div className="">FreshRoute소개</div>
                <div className="h-5 border-l border-black"></div>
                <div className="">이용약관</div>
                <div className="h-5 border-l border-black"></div>
                <div className="">개인정보처리방침</div>
                <div className="h-5 border-l border-black"></div>
                <div className="">고객센터</div>
            </div>
            <div className="w-full h-1 bg-primary-500"></div>
            <div className="flex justify-start gap-5 m-3">
                <img src="/FreshRouterLogo.png" alt="FreshRouter logo" className="h-12"/>
                <div className="">FreshRoute는 농가와 소비자를 위해 힘쓰는 쇼핑몰입니다.</div>
            </div>
        </div>
    );
}

export default Footer;