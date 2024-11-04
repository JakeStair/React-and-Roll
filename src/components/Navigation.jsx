import { Link } from 'react-router-dom';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <Link to="/about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-active' : ''}>
                    About me
                </Link>
            </li>
            <li>
                <Link to="/portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-active' : ''}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-active' : ''}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-active' : ''}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}