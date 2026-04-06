import { Link, NavLink, Outlet } from "react-router-dom";
import './css/Home02.css';

export default function Home02() {
    return (
        <section className="section">
            <div className="left_fixed">
                {/* 프로필 */}
                <div className="profile">
                    <h5>02</h5>
                    <p>@RYEONG</p>
                    <Link to="/02">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </div>
                {/* 카테고리 */}
                <div className="category">
                    <h5>category</h5>
                    <ul>
                        <li>
                            <NavLink to="/02" end>
                                <i className="fa-solid fa-star"></i>
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/02/SKILLS">
                                <i className="fa-solid fa-star"></i>
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/02/PROJECT">
                                <i className="fa-solid fa-star"></i>
                                Project
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* 링크 */}
                <div className="contact">
                    <p>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:dlfudrud627@naver.com" target="_blank" rel="noreferrer">dlfudrud627@naver.com</a>
                    </p>
                    <p>
                        <img src="/img/icons/Github-icon.png" alt="노션 아이콘" />
                        <a href="https://github.com/r-eong/RYEONG-PORTFOLIO" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                </div>
            </div>
            <div className="home_container">
                <Outlet />
            </div>
        </section>
    )
}