import Header from './components/Header';
import AboutUs from './about/page';
import Hero from "./components/HeroSection";
import Image from 'next/image';
import Categories from './components/Categories';
import Reviews from "./components/Reviews";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Header />
      <section className="container mx-auto my-8 grid md:grid-cols-3 gap-4">
        <div className="text-center">
          <Image src="/Frame 9.png" alt="" width={400} height={400} className="mx-auto" />
          <p className="text-lg font-semibold">Natural Plants</p>
          <p>₱1,400.00</p>
        </div>
        <div className="text-center">
          <Image src="/frame 8.png" alt="" width={400} height={400} className="mx-auto" />
          <p className="text-lg font-semibold">Artificial Plants</p>
          <p>₱900.00</p>
        </div>
        <div className="text-center">
          <Image src="/Frame 7.png" alt="" width={400} height={400} className="mx-auto" />
          <p className="text-lg font-semibold">Artificial Plants</p>
          <p>₱3,500.00</p>
        </div>
      </section>
      <AboutUs />
     <Categories />
     <Reviews />
     <Footer />
    </div>
  );
}