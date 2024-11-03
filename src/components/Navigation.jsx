export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About'}>
                    About me
                </a>
            </li>
            <li>
                <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio'}
                    >
                    Portfolio
                </a>
            </li>
            <li>
                <a href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact'}
                >
                    Contact
                </a>
            </li>
            <li>
                <a href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}