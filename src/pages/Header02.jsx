import { Link } from 'react-router-dom';
import './css/Header02.css';

export default function Header02({ toggleMenu, isDark, toggleDark }) {
    return (
        <header className="header">
            <Link to="/02">
                <i className="fa-solid fa-house"></i>
            </Link>
            <i
                className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}
                onClick={toggleDark}
            ></i>
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </header>
    )
}