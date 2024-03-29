import modals from './modules/modals';
import sliders from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import burger from './modules/burger';
import scroll from './modules/scroll';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name=phone]');
  checkTextInputs('[name=name]');
  checkTextInputs('[name=message]');
  showMoreStyles('.button-styles', '#styles .row');
  calc(
    '#size',
    '#material',
    '#options',
    '.promocode',
    '.calc-price',
    '.calc-price_value'
  );
  filter();
  pictureSize('.sizes-block');
  burger('.burger-menu', '.burger');
  scroll('.pageup');
  drop();
});
