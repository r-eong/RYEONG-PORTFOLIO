import { Link } from 'react-router-dom';
import { allIcons, projectData } from './data/ProjectData';
import './css/ProjectDetail.css';

export default function ProjectDetail_02() {
    const project = projectData[1];

    return (
        <div className="project_detail_page">
            <div className="top">
                <i className="fa-solid fa-folder-open"></i>
                <span>
                    <Link to='/02/Project'>Project</Link> / {project.subtitle}
                </span>
            </div>

            <nav className="project_container">
                <i className="fa-solid fa-clapperboard"></i>
                <span className="main_title">{project.title}</span>
                <hr />

                <div className="project_Box">
                    {/* 프로젝트 설명 */}
                    <section className="detail_section">
                        <h5>프로젝트 설명</h5>
                        <p>{project.content}</p>
                    </section>

                    {/* 기술 스택 */}
                    <section className="detail_section">
                        <h5>기술 스택</h5>
                        <div className="stack_list">
                            {project.stack.map((stackName, index) => {
                                const icon = allIcons[stackName];
                                return (
                                    <div key={index} className="stack_item">
                                        <img src={icon.src} alt={stackName} title={stackName} />
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* 프로젝트 정보 (인원/기간) */}
                    <ul className="project_info">
                        <li>
                            <h5>참여인원</h5>
                            <p>4명</p>
                        </li>
                        <li>
                            <h5>기간</h5>
                            <p>2025.11.10 ~ 2025.11.13</p>
                        </li>
                        {/* <li>
                            <h5>최적화 환경</h5>
                            <p>Desktop (1920*1080) 전용</p>
                        </li> */}
                    </ul>

                    {/* 상세 내용 */}
                    <section className="detail_section">
                        <h5>상세 내용</h5>
                        <p className="description_text">
                            React(Vite)를 활용하여 실제 OTT 서비스의 핵심 UI와 비동기 데이터 흐름을 재현한 <strong>프론트엔드 중심의 클론 코딩 프로젝트</strong>.
                            <br /><br />
                            단순한 정적 페이지 구현을 넘어, <strong>TMDB(The Movie Database) API</strong>를 연동하여 실시간 영화 정보를 수집. <strong>fetch API</strong>를 활용한 비동기 통신으로 방대한 <strong>JSON 데이터</strong>를 호출하고, 이를 리액트의 상태 관리 시스템에 맞춰 가공하여 카테고리별로 동적 렌더링하는 구조를 설계.
                            <br /><br />
                            비록 실제 DB를 구축한 서비스는 아니나, 외부 API로부터 전달받은 원천 데이터를 사용자 화면에 효율적으로 출력하기 위한 <strong>비동기 처리 로직(async/await)</strong>과 <strong>Context API를 통한 전역 상태 관리</strong>를 경험하며 실제 서비스의 데이터 파이프라인을 시뮬레이션하는 데 집중.
                        </p>
                    </section>

                    {/* 기여도 */}
                    <section className="detail_section">
                        <h5>기여도</h5>
                        <div className='Contribution'>
                            <div className="con_group">
                                <h6>프론트엔드 개발 및 데이터 핸들링</h6>
                                <ul>
                                    <li>
                                        <strong>인증 시스템 및 진입 경로 설계</strong>: 비로그인 사용자를 위한 랜딩 페이지와 로그인/회원가입 UI 마크업 및 스타일링 전담
                                    </li>
                                    <li>
                                        <strong>TMDB API 연동 및 비동기 처리</strong>: <strong>fetch API</strong>를 사용하여 외부 API 서버와의 비동기 통신을 구현하고, 응답 데이터(JSON)를 리액트 생명주기에 맞춰 상태(State)에 반영하는 동적 데이터 바인딩 로직 구현
                                    </li>
                                    <li>
                                        <strong>전역 상태 관리 설계</strong>: Context API를 활용하여 전역 로그인 상태를 관리하고, 인증 여부에 따른 헤더/푸터 분기 처리 및 페이지 접근 제어(Protected Route) 로직 구축
                                    </li>
                                    <li>
                                        <strong>UI/UX 품질 보증 (QA)</strong>: 팀 프로젝트의 시각적 일관성을 위해 전체 레이아웃 밸런스를 검토하고, 팀원들의 CSS 디자인 시스템에 대한 기술적 피드백 및 코드 가이드 제시
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="detail_section">
                        <h5>테스트 계정 정보</h5>
                        <div className="test_account">
                            <div className="account_item">
                                <span className="label admin">테스트</span>
                                <p>ID : <span>test</span> / PW : <span>1234</span></p>
                            </div>
                        </div>
                    </section>

                    {/* 외부 링크 바로가기 버튼 */}
                    <div className='detail_links'>
                        <div className="link_notice">
                            <i className="fa-solid fa-circle-info"></i>
                            <span>본 프로젝트는 데스크탑 전체화면(1920px)에 최적화되어 있습니다.</span>
                        </div>
                        <a href='https://ott-project2025.vercel.app/' target="_blank" rel="noreferrer">배포페이지</a>
                        <a href='https://github.com/r-eong/OTT_Project2025' target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}