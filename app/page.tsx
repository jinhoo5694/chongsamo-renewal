import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import TrustBenefits from './components/TrustBenefits';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <NewArrivals />
        <BestSellers />
        <TrustBenefits />
      </main>
      <Footer />
    </div>
  );
}
