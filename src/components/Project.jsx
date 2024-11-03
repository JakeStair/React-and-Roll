import { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Project() {
    const [currentPage, setCurrentPage] = useState('About');
}