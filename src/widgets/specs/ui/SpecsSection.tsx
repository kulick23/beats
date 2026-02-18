import { featureItems } from '../../../shared/model/data';
import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

export function SpecsSection() {
  return (
    <section id="descriptions" className="content__statis">
      <div className="statis__info">
        <h2 className="statis__heading">Good headphones and loud music is all you need</h2>
        {featureItems.map((item) => (
          <div className="statis__description" key={item.title}>
            <div className="description__block">
              <div className="description__border"></div>
              <img className="description__image" src={getAssetUrl(item.icon)} alt={item.title} />
            </div>
            <div>
              <h2 className="description__heading">{item.title}</h2>
              <p className="description__text">{item.text}</p>
              <a href="#" className="description__text description__text--red">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      <img
        className="content__image content__image--position"
        src={getAssetUrl('assets/images/feature.png')}
        alt="Feature"
      />
    </section>
  );
}
