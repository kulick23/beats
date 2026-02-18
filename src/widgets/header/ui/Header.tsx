import { useEffect, useRef } from 'react';
import { getAssetUrl } from '../../../shared/lib/getAssetUrl';
import { navigationItems } from '../../../shared/config/navigation';

type HeaderProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

export function Header({ isMenuOpen, onMenuToggle, onMenuClose }: HeaderProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current) {
        return;
      }

      const target = event.target as Node;
      if (!rootRef.current.contains(target)) {
        onMenuClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMenuOpen, onMenuClose]);

  return (
    <header className="app__header" ref={rootRef}>
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
