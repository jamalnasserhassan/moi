// swiperInit.js
import Swiper from 'swiper';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';

export function initializeSlider(selector, options = {}) {
  const defaultOptions = {
    loop: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // Explicitly import Pagination module here
  const swiperInstance = new Swiper(selector, {
    ...mergedOptions,
    modules: [Pagination, EffectFade, Navigation, Autoplay],
  });

  return swiperInstance;
}
export default initializeSlider;
