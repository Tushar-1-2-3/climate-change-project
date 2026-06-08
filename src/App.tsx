import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { ImpactCards } from './components/ImpactCards';
import { SolutionsSection } from './components/SolutionsSection';
import { ActionSection } from './components/ActionSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <ImpactCards />
        <SolutionsSection />
        <ActionSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
