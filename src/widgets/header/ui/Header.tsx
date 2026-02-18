import { getAssetUrl } from '../../../shared/lib/getAssetUrl';
import { navigationItems } from '../../../shared/config/navigation';

export function Header() {
  return (
    <header className="app__header">
      <img className="header__logo" src={getAssetUrl('assets/icons/logo.svg')} alt="Beats logo" />
      <nav className="header__nav">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} className="header__nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
