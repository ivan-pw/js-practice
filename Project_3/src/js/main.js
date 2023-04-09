import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({ container: '.page', btns: '.next' });
  mainSlider.render();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    activeClass: 'card-active',
    animate: true,
  });

  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });

  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
  });

  feedSlider.init();

  new Difference({
    oldOfficer: '.officerold',
    newOfficer: '.officernew',
    items: '.officer__card-item',
  }).init();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();

  new Forms('form').init();
});
