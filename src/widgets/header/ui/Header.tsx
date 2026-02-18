import { getAssetUrl } from '../../../shared/lib/getAssetUrl';
import { navigationItems } from '../../../shared/config/navigation';

type HeaderProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

export function Header({ isMenuOpen, onMenuToggle, onMenuClose }: HeaderProps) {
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

      <button
        type="button"
        className={`header__burger${isMenuOpen ? ' active' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={onMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu${isMenuOpen ? ' active' : ''}`}>
        <nav className="mobile-menu__nav">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-menu__link" onClick={onMenuClose}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
