import { useMenu } from '../../../features/menu/model/useMenu';
import { navigationItems } from '../../../shared/config/navigation';
import { BoxSection } from '../../../widgets/box/ui/BoxSection';
import { ColorCollection } from '../../../widgets/collection/ui/ColorCollection';
import { Footer } from '../../../widgets/footer/ui/Footer';
import { Header } from '../../../widgets/header/ui/Header';
import { HeroSection } from '../../../widgets/hero/ui/HeroSection';
import { ProductsSection } from '../../../widgets/products/ui/ProductsSection';
import { SpecsSection } from '../../../widgets/specs/ui/SpecsSection';
import { SubscribeSection } from '../../../widgets/subscribe/ui/SubscribeSection';

export function HomePage() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <div className="app">
      <div className={`app__menu${isOpen ? ' active' : ''}`}>
        <nav className="menu__nav">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </nav>
      </div>

      <div className="app__Allcontent">
        <Header isMenuOpen={isOpen} onMenuClick={toggleMenu} />

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
