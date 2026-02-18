import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

type HeaderProps = {
  isMenuOpen: boolean;
  onMenuClick: () => void;
};

export function Header({ isMenuOpen, onMenuClick }: HeaderProps) {
  return (
    <header className="app__header">
      <img className="header__logo" src={getAssetUrl('assets/icons/logo.svg')} alt="Beats logo" />
      <div className="header__nav--icons">
        <a href="#" aria-label="Search">
          <div className="icons__item">
            <img className="item__image" src={getAssetUrl('assets/icons/search.svg')} alt="Search" />
          </div>
        </a>
        <div className="item__line"></div>
        <a href="#" aria-label="Cart">
          <div className="icons__item">
            <img className="item__image" src={getAssetUrl('assets/icons/box.svg')} alt="Cart" />
          </div>
        </a>
        <div className="item__line"></div>
        <a href="#" aria-label="Profile">
          <div className="icons__item">
            <img className="item__image" src={getAssetUrl('assets/icons/user.svg')} alt="User" />
          </div>
        </a>
      </div>
      <button
        type="button"
        aria-label="Open menu"
        className={`header__button--burger${isMenuOpen ? ' active' : ''}`}
        onClick={onMenuClick}
      ></button>
    </header>
  );
}
