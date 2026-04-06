import { Link } from 'react-router-dom';
import { allIcons, projectData } from './data/ProjectData';
import './css/ProjectDetail.css';

export default function ProjectDetail_03() {
    const project = projectData[2];

    return (
        <div className="project_detail_page">
            <div className="top">
                <i className="fa-solid fa-folder-open"></i>
                <span>
                    <Link to='/02/Project'>Project</Link> / {project.subtitle}
                </span>
            </div>

            <nav className="project_container">
                <i className="fa-solid fa-film"></i>
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
                            <p>1명</p>
                        </li>
                        <li>
                            <h5>기간</h5>
                            <p>2025.10.15 ~ 2025.10.17</p>
                        </li>
                    </ul>

                    {/* 상세 내용 */}
                    <section className="detail_section">
                        <h5>상세 내용</h5>
                        <div className="description_text">
                            <p>
                                <strong>메가박스 UI 클론</strong><br />
                                실제 메가박스 서비스의 레이아웃과 디자인을 분석하여 HTML5/CSS3 기반으로 화면을 재현한 프로젝트.
                                웹 표준을 고려한 시맨틱 마크업 구조와 실제 서비스의 폰트·컬러·버튼 스타일을 최대한 가깝게 구현하는 데 집중.
                            </p>
                            <br />
                            <p>
                                <strong>JavaScript 클릭 이벤트</strong><br />
                                좌석을 클릭하면 선택 여부가 UI에 즉각 반영되도록 JavaScript로 클릭 이벤트를 구현.
                                데이터베이스 없이 JavaScript만으로 사용자 입력에 반응하는 동적 페이지를 구성하는 연습에 집중.
                            </p>
                        </div>
                    </section>

                    <section className="detail_section">
                        <h5>구현 범위</h5>
                        <ul className="capability_list">
                            <li>
                                <i className="fa-solid fa-check"></i>&nbsp;
                                <span><strong> 메인 화면</strong> : 실제 서비스와 유사한 레이아웃 구현</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>&nbsp;
                                <span><strong> 영화 랭킹 슬라이드</strong> : 현재 상영 중인 영화 랭킹 UI 구현</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>&nbsp;
                                <span><strong> 전체 영화 목록</strong> : 목록 화면 UI 구현</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>&nbsp;
                                <span><strong> 메뉴 전체보기</strong> : 전체 메뉴 화면 UI 구현</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>&nbsp;
                                <span><strong> 좌석 선택</strong> : 영화·극장이 고정된 상태에서 좌석 클릭 이벤트 구현</span>
                            </li>
                            <li className="not_supported">
                                <i className="fa-solid fa-xmark"></i>&nbsp;
                                <span> 영화·극장·날짜 탐색 및 실제 예매·결제 기능은 구현되지 않았습니다.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 외부 링크 바로가기 버튼 */}
                    <div className='detail_links'>
                        <a href='https://mega-three.vercel.app/' target="_blank" rel="noreferrer">배포페이지</a>
                        <a href='https://github.com/r-eong/mega2025' target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}