import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import About from '@/components/About';
import Competencies from '@/components/Competencies';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Summary />
      <About />
      <Competencies />
      <Projects />
      <Experience />
      <Leadership />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
