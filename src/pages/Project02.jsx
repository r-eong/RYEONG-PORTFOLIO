import { Link } from 'react-router-dom';
import { allIcons, projectData } from './data/ProjectData';
import './css/Project02.css';

export default function Project02() {
    const project = projectData;
    return (
        // project - 프로젝트 목록
        <>
            <div className="top">
                <i className="fa-solid fa-folder" style={{ marginRight: '17px' }}></i>
                <span>Project</span>
            </div>
            <nav className="project">
                {project.map((pro, index) => (
                    <Link to={pro.link} className='pro_Link' key={index}>
                        <div className='pro_img'>
                            <img src={pro.src} alt={pro.title} />
                            <div className='project_hiddenBox'>
                                <span className={`pro_tag ${pro.subtitle.includes('팀') ? 'team' : 'solo'}`}>
                                    {pro.subtitle.includes('팀') ? 'TEAM' : 'PERSONAL'}
                                </span>
                                <h5>{pro.title}</h5>
                                <hr />
                                <span className={`${pro.subtitle.includes('팀') ? 'sub_team' : 'sub_solo'}`}>{pro.subtitle}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </nav>
        </>
    )
}