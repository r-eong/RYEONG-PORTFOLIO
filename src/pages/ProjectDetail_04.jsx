import { Link } from 'react-router-dom';
import { allIcons, projectData } from './data/ProjectData';
import './css/ProjectDetail.css';

export default function ProjectDetail_04() {
    const project = projectData[3];

    return (
        <div className="project_detail_page">
            <div className="top">
                <i className="fa-solid fa-folder-open"></i>
                <span>
                    <Link to='/02/Project'>Project</Link> / {project.subtitle}
                </span>
            </div>

            <nav className="project_container">
                <i className="fa-solid fa-mug-hot"></i>
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
                            <p>1명 (개인 프로젝트)</p>
                        </li>
                        <li>
                            <h5>기간</h5>
                            <p>2025.12.03 ~ 2025.12.04</p>
                        </li>
                    </ul>

                    {/* 상세 내용 */}
                    <section className="detail_section">
                        <h5>상세 내용</h5>
                        <p className="description_text">
                            Figma·Illustrator를 활용해 여러 레퍼런스를 분석·재해석한 커피 주문 앱 UI/UX 디자인 개인 프로젝트.
                            <br /><br />
                            다양한 오더 앱 레퍼런스를 참고하여 서비스 흐름을 기획하고, Illustrator로 브랜드 톤에 맞는
                            그래픽 요소를 직접 제작.
                            <br /><br />
                            Figma로 화면 구조와 인터랙션을 설계하여 실제 앱과 유사한 프로토타입으로 완성.
                        </p>
                    </section>

                    {/* 외부 링크 바로가기 버튼 */}
                    <div className='detail_links'>
                        <a href='https://www.figma.com/proto/IRXYOeiGRLUOkoB4u4W4Rv/%EC%9D%B4%EB%A0%B9%EA%B2%BD_%EC%9A%B0%EC%A7%80%EC%BB%A4%ED%94%BC?node-id=31-433&p=f&viewport=326%2C-27%2C0.23&t=yLT5wfUWubfk0OuF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A433&page-id=0%3A1' target="_blank" rel="noreferrer">프로토타입</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}