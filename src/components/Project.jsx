import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import '../assets/style/style.css';

export default function Project() {
    return (
        <div className="app-container">
            <Header />
            <main className="container mt-5">
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Navigate to="/about" replace />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

