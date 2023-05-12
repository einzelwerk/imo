// eslint-disable-next-line
import { SwiperContainer, register } from 'swiper/element/bundle';
import { Navigation, EffectFade } from 'swiper';
// eslint-disable-next-line
import 'swiper/css';

register();

class Sliders {
  static info() {
    const root = document.querySelector('.js-info-slider') as SwiperContainer;
    const params = {
      modules: [Navigation, EffectFade],
    };

    Object.assign(root, params);
    root.initialize();
  }

  static partners() {
    const root = document.querySelector('.js-partners-slider') as SwiperContainer;
    const params = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };

    Object.assign(root, params);
    root.initialize();
  }
  
  static team() {
    const root = document.querySelector('.js-partners-slider') as SwiperContainer;
    const params = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };

    Object.assign(root, params);
    root.initialize();
  }
}

function slidersInit() {
  Sliders.info();
  Sliders.partners();
  Sliders.team()
}


  slidersInit();


window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
