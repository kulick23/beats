import { products } from '../../../shared/model/data';
import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

export function ProductsSection() {
  return (
    <section id="latest" className="content__product">
      <div className="product__title">
        <h2 className="description__heading title__heading">Our Latest Product</h2>
        <p className="description__text title__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante.
        </p>
      </div>
      <div className="product__block">
        {products.map((product) => (
          <div key={product.id} className={`product__item ${product.itemClassName ?? ''}`.trim()}>
            <div className={`product__photo ${product.photoClassName}`}>
              <a href="#" className={`photo__block ${product.iconClassName}`}>
                <img className="photo__icon" src={getAssetUrl('assets/icons/shopping-cart.svg')} alt="Cart" />
              </a>
              <img className="product__image" src={getAssetUrl(product.image)} alt={product.name} />
            </div>
            <div className="product__rating">
              <div className="rating__block">
                <p className="product__stars">{'★ '.repeat(product.rating).trim()}</p>
                <p className="rating__text">{product.name}</p>
              </div>
              <div className="rating__info">
                <p className="info__text">{product.score}</p>
                <p className="info__cost">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
