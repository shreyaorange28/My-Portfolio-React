import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <header className="header">
            <a href="/" className="logo">Shreya Thothathri&apos;s Website</a>
            <nav className="navbar">
                <Link to="/" >Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}
