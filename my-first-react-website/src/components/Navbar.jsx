import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <header className="header">
            <a href="/" className="logo">Logo</a>
            <nav className="navbar">
                <Link to="/" >Home</Link>
                <Link to="/page1">Page 1</Link>
                <Link to="/page2">Page 2</Link>
            </nav>
            
        </header>
    );
}
