import { boxItems } from '../../../shared/model/data';
import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

export function BoxSection() {
  return (
    <section id="box" className="content__box">
      <img className="box__image" src={getAssetUrl('assets/images/boxing.png')} alt="In the box" />
      <div className="box__info">
        <h2 className="description__heading info__heading">Whatever you get in the box</h2>
        <div className="info__params">
          {boxItems.map((item) => (
            <div className="params__item" key={item}>
              <img className="item__photo" src={getAssetUrl('assets/icons/arrow-in-circle.svg')} alt="Arrow" />
              <p className="item__text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
