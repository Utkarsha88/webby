import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Subscriptions from '@/components/Subscriptions';
import TrustSection from '@/components/TrustSection';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Subscriptions />
        <TrustSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
