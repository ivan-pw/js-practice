export default class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const sibl = btn.closest('.module__info-show').nextElementSibling;
        sibl.classList.toggle('msg');
        sibl.style.marginTop = '20px';
      });
    });
  }
}
