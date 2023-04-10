import Slider from './slider';
import error from '../error';

export default class MainSlider extends Slider {
  constructor(btns, prev) {
    super(btns, prev);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      this.hanson.style.opacity = '0';

      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (e) {
      error(e);
    }

    Array.from(this.slides).forEach((slide) => {
      slide.style.display = 'none';
    });

    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  minusSlides(n) {
    this.showSlides((this.slideIndex -= n));
  }

  bindTriggers() {
    this.btns.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.prev.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.minusSlides(1);
      });
    });

    this.next.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1);
      });
    });
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) {
        error(e);
      }

      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}
