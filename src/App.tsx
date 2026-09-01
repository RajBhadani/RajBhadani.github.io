import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import CurrentWork from './components/CurrentWork';
import VerifiedProjects from './components/VerifiedProjects';
import ProjectLog from './components/ProjectLog';
import ExperienceSection from './components/Experience';
import Skills from './components/Skills';
import MoreSection from './components/MoreSection';
import Contact from './components/Contact';
import { navLinks } from './data';
import { useActiveSection } from './useActiveSection';

const sectionIds = navLinks.map((l) => l.href.slice(1));

function App() {
  const active = useActiveSection(sectionIds);

  return (
    <div className="shell">
      <Sidebar active={active} />
      <MobileNav active={active} />
      <main>
        <Hero />
        <CurrentWork />
        <VerifiedProjects />
        <ProjectLog />
        <ExperienceSection />
        <Skills />
        <MoreSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;
