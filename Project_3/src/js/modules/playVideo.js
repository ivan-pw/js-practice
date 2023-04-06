export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }

  // play() {
  //   this.btns.forEach((btn) => {
  //     btn.addEventListener('click', () => {
  //       console.log('hello!');
  //     });
  //   });
  // }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url,
      // playerVars: {
      //   playsinline: 1,
      // },
      // events: {
      //   onReady: onPlayerReady,
      //   onStateChange: onPlayerStateChange,
      // },
    });

    console.log(this.player);

    this.overlay.style.display = 'flex';
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // if (document.querySelector('iframe#frame')) {
        //   this.overlay.style.display = 'flex';
        // } else {
        //   const path = btn.dataset.url;
        //   this.createPlayer(path);
        // }

        const path = btn.dataset.url;
        console.log(path);

        this.createPlayer(path);
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.player.destroy();
      // this.player.stopVideo();
      this.overlay.style.display = 'none';
    });
  }

  init() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }
}
