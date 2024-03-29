const modals = () => {
  let btnPressed = false;
  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) => {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach((item) => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', (e) => {
      windows.forEach((item) => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';

      document.body.style.marginRight = '0px';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    });
  };

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      const scroll = calcScroll();
      document.querySelectorAll('[data-modal]').forEach((item) => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }

        if (!display) {
          document.querySelector(selector).style.display = 'block';
          // document.body.classList.add('modal-open');
          document.body.style.overflow = 'hidden';
          document.body.style.marginRight = `${scroll}px`;
        }
      });
    }, time);
  }

  function calcScroll() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (
        !btnPressed &&
        window.scrollY + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 20
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal(
    '.button-consultation',
    '.popup-consultation',
    '.popup-consultation .popup-close'
  );
  openByScroll('.fixed-gift');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  // showModalByTime('.popup-consultation', 6000);
};

export default modals;
