import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { colorSlides } from '../../../shared/model/data';
import { getAssetUrl } from '../../../shared/lib/getAssetUrl';

export function ColorCollection() {
  return (
    <section id="colors">
      <h2 className="swipper__heading">Our Latest colour collection 2021</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {colorSlides.map((slide) => (
          <SwiperSlide key={slide}>
            <img src={getAssetUrl(slide)} alt="Beats color" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
