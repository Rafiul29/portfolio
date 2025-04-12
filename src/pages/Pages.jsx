import { AnimatePresence } from "framer-motion"
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutSection from './pages/AboutSection';
import SkillSection from './pages/SkillSection';
import ProjectSection from './pages/ProjectSection';
import ContactSection from './pages/ContactSection';
import BlogSection from './pages/BlogSection';

function Pages() {
    return (
        <AnimatePresence mode="wait">
            return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-me" element={<AboutSection />} />
                <Route path="/skills" element={<SkillSection />} />
                <Route path="/projects" element={<ProjectSection />} />
                <Route path="/contacts" element={<ContactSection />} />
                <Route path="/blogs" element={<BlogSection />} />
            </Routes>
            );
        </AnimatePresence>
    )
}
export default Pages;