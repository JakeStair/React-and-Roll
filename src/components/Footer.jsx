import React from 'react';
import '../assets/style/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p>© Jake Watson's React & Roll Portfolio</p>
            <div className="footer-links">
                <a href="https://github.com/JakeStair" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/fireandwhitepodcast/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/jacob-watson-b7b2b1133/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}
