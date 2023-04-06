import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({ page: '.page', btns: '.next' });
  mainSlider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
});
