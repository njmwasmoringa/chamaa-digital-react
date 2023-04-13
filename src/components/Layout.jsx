import { Link } from "react-router-dom";
import Header from "./Header";

export default function Layout({ children }) {
    return <>
        <Header />
        <main className="d-flex align-items-stretch">
            <aside>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/signin" className="nav-link">Sign In</Link></li>
                        <li className="nav-item"><Link to="/signup" className="nav-link">Sign Up</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                        <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link">Sign Out</Link></li>
                    </ul>
                </nav>
            </aside>
            <section className="flex-fill d-flex flex-column pt-5">
                {children}
            </section>
        </main></>
}