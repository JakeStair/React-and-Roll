import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    return (
        <ul>
            <li>
                <Link to="/about"
                onClick={() => console.log('About link clicked')}
                className={location.pathname === 'About' ? 'nav-active' : ''}>
                    About me
                </Link>
            </li>
            <li>
                <Link to="/portfolio"
                onClick={() => console.log('Portfolio link clicked')}
                className={location.pathname === 'Portfolio' ? 'nav-active' : ''}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="/contact" 
                onClick={() => console.log('Contact link clicked')}
                className={location.pathname === 'Contact' ? 'nav-active' : ''}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/resume"
                onClick={() => console.log('Resume link clicked')}
                className={location.pathname === 'Resume' ? 'nav-active' : ''}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}