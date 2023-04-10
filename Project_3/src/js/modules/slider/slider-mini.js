import Slider from './slider';
import error from '../error';

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
    this.btnsSlidesSiblings = false;
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.checkButtonsForSiblingsSlides();
    this.decorizeSlides();
  }

  decorizeSlides() {
    [...this.slides]
      // .filter((el) => el.tagName !== 'BUTTON')
      .forEach((slide) => {
        slide.classList.remove(this.activeClass);

        if (this.animate) {
          slide.querySelector('.card__title').style.opacity = '0.4';
          slide.querySelector('.card__controls-arrow').style.opacity = '0';
        }
      });

    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  checkButtonsForSiblingsSlides() {
    [...this.slides].forEach((el) => {
      if (el.tagName === 'BUTTON') {
        this.container.appendChild(el);
        this.btnsSlidesSiblings = true;
      }
    });
  }

  bindTriggers() {
    this.checkButtonsForSiblingsSlides(); // init btnsSlidesSiblings

    this.next.addEventListener('click', () => this.nextSlide());
    this.prev.addEventListener('click', () => {
      let active;
      if (this.btnsSlidesSiblings) {
        active = this.slides[this.slides.length - 3];
      } else {
        active = this.slides[this.slides.length - 1];
      }
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
    });
  }

  init() {
    // console.log(this.container, this.next, this.prev);

    // this.slides = [...this.slides].filter((el) => el.tagName !== 'BUTTON');
    // console.log(this.slides);
    try {
      this.container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: flex-start;
`;

      this.bindTriggers();

      this.decorizeSlides();

      if (this.autoplay) {
        setInterval(() => {
          this.nextSlide();
        }, 5000);
      }
    } catch (e) {
      error(e);
    }
  }
}
