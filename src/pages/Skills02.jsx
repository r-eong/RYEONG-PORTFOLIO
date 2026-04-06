import { allIcons, languageSkills, toolSkills } from './data/ProjectData';
import './css/Skills02.css';

export default function Skills02() {
    return (
        <div className="skills_container">
            <div className="top">
                <i className="fa-solid fa-toolbox"></i>
                <span>Skills</span>
            </div>

            {/* 언어 섹션 */}
            <nav className="skills sk01">
                <div className="skills_header">
                    <i className="fa-solid fa-code"></i>
                    <span>언어</span>
                </div>
                <hr />
                <ul>
                    {languageSkills.map((key, index) => {
                        const icon = allIcons[key];
                        if (!icon) return null; // 데이터 없을 경우 방어 코드
                        return (
                            <li key={index} className="skill_item">
                                <div className="icon_box">
                                    <img src={icon.src} alt={`${icon.name} 아이콘`} />
                                </div>
                                <p>{icon.name}</p>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* 도구 및 프레임워크 섹션 */}
            <nav className="skills sk02">
                <div className="skills_header">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <span>도구 및 프레임워크</span>
                </div>
                <hr />
                <ul>
                    {toolSkills.map((key, index) => {
                        const icon = allIcons[key];
                        if (!icon) return null;
                        return (
                            <li key={index} className="skill_item">
                                <div className="icon_box">
                                    <img src={icon.src} alt={`${icon.name} 아이콘`} />
                                </div>
                                <p>{icon.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}