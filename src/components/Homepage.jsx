import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ProjectSection from "./ProjectSection"
import SkillSection from "./SkillSection"

export default function Homepage() {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
        {/* <SkillSection/> */}
        <ProjectSection isHomepage={true}/>
     
    </>
  )
}
