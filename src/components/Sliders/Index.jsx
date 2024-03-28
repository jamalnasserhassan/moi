// swiperInit.js
import Swiper from 'swiper';

export function initializeSlider(selector, options = {}) {
  const defaultOptions = {
    loop: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // Explicitly import Pagination module here
  const swiperInstance = new Swiper(selector, {
    ...mergedOptions
  });

  return swiperInstance;
}
export default initializeSlider;
