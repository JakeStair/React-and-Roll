import React from 'react';
import Navigation from './Navigation';
import '../assets/style/Header.css';

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Jake Watson</h1>
            <Navigation />
        </header>
    );
}
