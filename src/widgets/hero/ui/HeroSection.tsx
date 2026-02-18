import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

export function HeroSection() {
  return (
    <>
      <img className="content__image" src={getAssetUrl('assets/images/hero.png')} alt="Beats hero" />
      <div className="content__description">
        <div>
          <h3 className="description__info1">Hear it. Feel it</h3>
          <h1 className="description__info2">Move with the music</h1>
        </div>
        <div className="description__cost">
          <h1 className="cost">$ 435</h1>
          <div className="cost__line"></div>
          <h3 className="cost__crossed">$ 465</h3>
        </div>
        <button className="description__button">BUY NOW</button>
      </div>
    </>
  );
}
