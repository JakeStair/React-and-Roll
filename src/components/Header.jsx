import React from 'react';
import Navigation from './Navigation';
import '../assets/style/Header.css';

export default function Header() {
    return (
        <header className="header">
            <h3 className="header-title">Jake Watson</h3>
            <Navigation />
        </header>
    );
}
