import { Link } from 'react-scroll';
import './css/Header02.css';

export default function Header02() {
    return (
        <header className="header">
            <Link to="/02">
                <i className="fa-solid fa-house"></i>
            </Link>
        </header>
    )
}