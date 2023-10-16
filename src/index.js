import './index.html';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import './index.sass';
import Swiper from 'swiper';
import { Pagination, Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import { formHandler } from './modules/formHandler';
import { headerMenuHandler } from './modules/headerMenuHandler';
import { overlayClickHandler } from './modules/overlayClickHandler';

overlayClickHandler();
formHandler();
headerMenuHandler();

new Swiper('.article-swiper', {
  slidesPerView: 'auto',
  freeMode: true,
  modules: [Scrollbar, Mousewheel, FreeMode],
  scrollbar: {
    el: ".article-scrollbar",
  },
  mousewheel: true,
  breakpoints: {
    768: {
      enabled: false,
    }
  }
});

new Swiper('.footer-swiper', {
  slidesPerView: 1,
  spaceBetween: 30 * innerWidth / 1024,
  modules: [Pagination],
  pagination: {
    el: ".footer-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      enabled: false,
    }
  },
  on: {
    resize: swiper => {
      swiper.params.spaceBetween = 30 * innerWidth / 1024;
    }
  }
});