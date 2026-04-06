import { Link } from 'react-router-dom';
import { allIcons, projectData } from './data/ProjectData';
import './css/ProjectDetail.css';

export default function ProjectDetail_01() {
    const project = projectData[0];

    return (
        <div className="project_detail_page">
            <div className="top">
                <i className="fa-solid fa-folder-open"></i>
                <span>
                    <Link to='/02/Project'>Project</Link> / {project.subtitle}
                </span>
            </div>

            <nav className="project_container">
                <i className="fa-solid fa-car"></i>
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
                            <p>2025.12.01 ~ 2025.12.29</p>
                            <p>2026.02.05 ~ 2026.03.05</p>
                        </li>
                    </ul>

                    {/* 상세 내용 */}
                    <section className="detail_section">
                        <h5>상세 내용</h5>
                        <p className="description_text">
                            <strong>React(Vite)</strong>와 <strong>Spring Boot</strong> 기반의 <strong>CSR(Client Side Rendering)</strong> 구조를 이해하고, 실무 수준의 <strong>Management System</strong>을 설계·구현한 풀스택 프로젝트.
                            <br /><br />
                            <strong>프론트엔드</strong> : 서비스 흐름을 고려한 <strong>와이어프레임</strong>으로 전체 화면 구조를 설계하고, <strong>HTML5/CSS3/JavaScript + React(Vite)</strong>로 UI 컴포넌트를 구현. <strong>PHP + MySQL</strong> 기반의 회원가입·로그인 인증 기능을 연동하여 <strong>Cafe24</strong> 서버에 1차 배포.
                            <br /><br />
                            <strong>백엔드 고도화</strong> : 기존 프론트엔드 프로젝트에 <strong>JAVA 기반의 Spring Boot 프레임 워크와 MyBatis(Persistence Framework)</strong>를 활용하고, <strong>MySQL DBMS</strong>를 연동하여 '렌터카 예약 웹 서비스'를 개발. 백엔드 서버를 구축하고, <strong>Axios</strong>를 활용한 <strong>REST API</strong> 연동 구조로 전환. 완성된 풀스택 서비스를 <strong>Cloudtype</strong> 클라우드 환경에 배포.
                            <br /><br />
                            <strong>데이터 대시보드</strong> : 기존 렌터카 서비스의 <strong>MySQL 데이터베이스</strong>를 활용하여 연령대별 예약 현황, 월별 가입자 추이 등 서비스 통계 지표를 도출하고, <strong>Python(Pandas)</strong>으로 데이터를 수집·정제하여 <strong>Matplotlib/Seaborn</strong> 기반의 통계 대시보드를 관리자 메뉴에 통합 구현.
                        </p>
                    </section>

                    {/* 기여도 */}
                    <section className="detail_section">
                        <h5>기여도</h5>
                        <div className='Contribution'>
                            <div className="con_group">
                                <h6>프론트엔드</h6>
                                <ul>
                                    <li><strong>와이어프레임 기반 UI 설계</strong> : 메인, 목록, 상세 화면 등 핵심 UI 컴포넌트 구조 설계 및 구현</li>
                                    <li><strong>다중 조건 필터링 시스템</strong> : 브랜드·차종·가격대 등 사용자 편의를 위한 카테고리 필터 UI 개발</li>
                                    <li><strong>예약/결제 프로세스</strong> : 차량 선택부터 결제 승인까지 이어지는 서비스 플로우 설계 및 프론트엔드 기능 개발</li>
                                </ul>
                            </div>

                            <div className="con_group">
                                <h6>백엔드</h6>
                                <ul>
                                    <li><strong>REST API 설계 및 서버 구축</strong> : Spring Boot와 MyBatis를 활용한 게시판 CRUD 및 데이터 처리 기능 구현</li>
                                    <li><strong>사용자 인증 시스템</strong> : 회원가입 및 로그인 기능 개발 및 데이터베이스 기반 인증 흐름 적용</li>
                                    <li><strong>공통 모듈 개발</strong> : 전 페이지에 재사용 가능한 <strong>공통 페이지네이션</strong> 설계 및 적용으로 코드 효율성 향상</li>
                                </ul>
                            </div>

                            <div className="con_group">
                                <h6>통계 대시보드 (Python)</h6>
                                <ul>
                                    <li><strong>데이터 전처리 및 분석</strong> : Pandas를 활용한 MySQL 데이터 소스 수집 및 시각화용 통계 데이터셋 가공</li>
                                    <li><strong>지표 시각화 구현</strong> : Seaborn을 활용한 도넛 차트 및 막대 그래프 등 경영 지표 대시보드 구축</li>
                                    <li><strong>시스템 통합</strong> : 시각화된 데이터 리포트를 React 관리자 화면에 유기적으로 배치 및 인터페이스 구축</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="detail_section">
                        <h5>테스트 계정 정보</h5>
                        <div className="test_account">
                            <div className="account_item">
                                <span className="label admin">관리자</span>
                                <p>ID : <span>admin</span> / PW : <span>1234</span></p>
                            </div>
                            <div className="account_item">
                                <span className="label user">테스트</span>
                                <p>ID : <span>test</span> / PW : <span>1234</span></p>
                            </div>
                        </div>
                    </section>

                    {/* 외부 링크 바로가기 버튼 */}
                    <div className='detail_links'>
                        <a href='https://charang2025.mycafe24.com/' target="_blank" rel="noreferrer">프론트엔드 배포페이지</a>
                        <a href={project.href} target="_blank" rel="noreferrer">백엔드 배포페이지</a>
                        <div>
                            <a href='https://canva.link/a6wyjf1b4u6o5ex' target="_blank" rel="noreferrer">프론트엔드 PPT</a>
                            <a href='https://canva.link/kvjo5ei84vzqik3' target="_blank" rel="noreferrer">백엔드 PPT</a>
                            <a href='https://github.com/jaykim1993/rentcar2025' target="_blank" rel="noreferrer">프론트엔드 GitHub</a>
                            <a href='https://github.com/jaykim1993/charang2026' target="_blank" rel="noreferrer">백엔드 GitHub</a>
                            <a href='https://10-32.notion.site/IMS-Backend-2fd7d4eb06e9806f9e3ed6c8303000d9?source=copy_link' target="_blank" rel="noreferrer">Notion</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}