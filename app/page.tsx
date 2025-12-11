import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NosotrosSection from './components/NosotrosSection';
import MenuSection from './components/MenuSection';
import Historia from './components/Historia';
import Franquicias from './components/Franquicias';
import Noticias from './components/Noticias';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NosotrosSection />
      <MenuSection />
      <Historia />
      <Franquicias />
      <Noticias />
      <Footer />
    </main>
  );
}
