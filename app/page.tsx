import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Franquicias from './components/Franquicias';
import Noticias from './components/Noticias';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Historia />
      <Franquicias />
      <Noticias />
      <Footer />
    </main>
  );
}
