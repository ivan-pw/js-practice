export default class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path) {
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.setAttribute('download', 'nice_pic');
    // link.style.display = 'none';
    // no need to place on page
    link.click();
  }

  init() {
    this.btns.forEach((item) => {
      item.addEventListener('click', () => {
        this.downloadItem(this.path);
      });
    });
  }
}
