import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ProjectSection from "./ProjectSection"
import SkillSection from "./SkillSection"
import EducationSection from "./EducationSection"
import BlogSection from "./BlogSection"
import ContactSection from "./ContactSection"

export default function Homepage() {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <EducationSection/>
        <ProjectSection isHomepage={true}/>
        <BlogSection isHomepage={true}/>
        <ContactSection isHomepage={true}/>
    </>
  )
}
