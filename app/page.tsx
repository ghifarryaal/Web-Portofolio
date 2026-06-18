import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import HomeAbout from '@/components/HomeAbout';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Summary />
      <HomeAbout />
      <Contact />
    </main>
  );
}
