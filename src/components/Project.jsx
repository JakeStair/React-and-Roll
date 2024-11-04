import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Project() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
    </>
  );
}
