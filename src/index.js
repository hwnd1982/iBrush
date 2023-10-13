import './index.html';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.sass';
import './img/sprite.svg';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { formHandler } from './modules/formHandler';

formHandler()

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30 * innerWidth / 1024,
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },
  on: {
    resize: swiper => {
      swiper.params.spaceBetween = 30 * innerWidth / 1024;
    }
  }
});