import modals from './modules/modals';
import sliders from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
});
