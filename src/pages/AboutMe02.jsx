import './css/AboutMe02.css';

export default function AboutMe02() {
    return (
        <>
            <div className="top">
                <i className="fa-solid fa-clipboard-user"></i>
                <span>About Me</span>
            </div>
            <nav className="aboutme_container">
                <div className="aboutme">
                    <div className='aboutme_top'>
                        <img src="/img/me.png" alt="이령경 이미지" />

                        <div className="aboutme_text">
                            <h2>안녕하세요, <span>이령경</span>입니다.</h2>
                            <p className="sub_title">디자인과 개발을 함께 다루는 프론트엔드 개발자 / 웹 퍼블리셔</p>

                            <div className="desc">
                                <p>
                                    사용자 흐름을 먼저 구조화하고, 컴포넌트 단위로 UI를 설계하고 구현합니다.
                                    디자인 시안을 직접 분석해 코드로 옮기는 작업을 꾸준히 익혀가고 있습니다.
                                </p>
                                <p style={{ marginTop: '15px' }}>
                                    재사용 가능한 컴포넌트 구조와 UI 일관성에 관심이 많고, 화면 단위가 아닌 서비스 전체 흐름을 먼저 파악하는 방식으로 작업하는 것이 강점입니다.
                                    의견이 있으면 팀에 적극적으로 공유하며 방향을 잃지 않으려 노력합니다.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="education_section">
                        <h4>EDUCATION</h4>
                        <div className="edu_list">
                            <div className="edu_item">
                                <span className="date">2016. 03 - 2019. 02</span>
                                <p className="school">서울디자인고 패션액세서리디자인과 졸업</p>
                            </div>
                            <div className="edu_item">
                                <span className="date">2019. 03 - 2021. 02</span>
                                <p className="school">한국폴리텍1대학(서울정수캠퍼스) 산업디자인과 졸업</p>
                            </div>
                            <div className="edu_item">
                                <span className="date">2025. 08 - 2026. 04</span>
                                <p className="school">그린컴퓨터 UIUX 프론트/백엔드 양성과정</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}