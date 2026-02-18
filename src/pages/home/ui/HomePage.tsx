import { BoxSection } from '../../../widgets/box/ui/BoxSection';
import { ColorCollection } from '../../../widgets/collection/ui/ColorCollection';
import { Footer } from '../../../widgets/footer/ui/Footer';
import { Header } from '../../../widgets/header/ui/Header';
import { HeroSection } from '../../../widgets/hero/ui/HeroSection';
import { ProductsSection } from '../../../widgets/products/ui/ProductsSection';
import { SpecsSection } from '../../../widgets/specs/ui/SpecsSection';
import { SubscribeSection } from '../../../widgets/subscribe/ui/SubscribeSection';

export function HomePage() {
  return (
    <div className="app">
      <div className="app__Allcontent">
        <Header />

        <main className="main__content">
          <HeroSection />
        </main>

        <section className="app__content">
          <ColorCollection />
          <SpecsSection />
          <ProductsSection />
          <BoxSection />
          <SubscribeSection />
        </section>

        <Footer />
        <div className="footer__back"></div>
      </div>
    </div>
  );
}
