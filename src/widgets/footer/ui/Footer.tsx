import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

export function Footer() {
  return (
    <footer className="app__footer">
      <div className="footer__block">
        <img src={getAssetUrl('assets/icons/logo.svg')} alt="Beats logo" />
        <div className="block__social block__social--active">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Product</a>
        </div>
        <div className="block__social">
          <a href="#" aria-label="Instagram">
            <div className="icons__item">
              <img className="item__image" src={getAssetUrl('assets/icons/instagram.svg')} alt="Instagram" />
            </div>
          </a>
          <a href="#" aria-label="Twitter">
            <div className="icons__item">
              <img className="item__image" src={getAssetUrl('assets/icons/twitter.svg')} alt="Twitter" />
            </div>
          </a>
          <a href="#" aria-label="Facebook">
            <div className="icons__item">
              <img className="item__image" src={getAssetUrl('assets/icons/facebook.svg')} alt="Facebook" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
