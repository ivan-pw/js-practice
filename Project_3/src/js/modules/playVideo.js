import error from './error';

export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
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
      events: {
        // onReady: onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });

    // console.log(this.player);

    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange(state) {
    // console.log(state);
    try {
      if (state.data === 0) {
        const blockedElem = this.activeBtn.closest(
          '.module__video-item'
        ).nextElementSibling;
        const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

        if (
          blockedElem
            .querySelector('.play__circle')
            .classList.contains('closed')
        ) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem
            .querySelector('.play__text')
            .classList.remove('attention');
          blockedElem.style.opacity = '1';
          blockedElem.style.filter = 'none';

          blockedElem.dataset.disabled = 'false';
        }
      }
    } catch (e) {
      error(e);
    }
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest(
          '.module__video-item'
        ).nextElementSibling;

        if (i % 2 === 0) {
          blockedElem.dataset.disabled = true;
        }
      } catch (e) {
        error(e);
      }

      btn.addEventListener('click', () => {
        // alternative way without destruction
        // if (document.querySelector('iframe#frame')) {
        //   this.overlay.style.display = 'flex';
        //   if(this.path !== btn.dataset.url) {
        //   this.path = btn.dataset.url;
        //   this.player.loadVideoById({videoId: this.path});
        //   }
        // } else {
        //   this.path = btn.dataset.url;
        //   this.createPlayer(this.path);
        // }

        if (
          !btn.closest('.module__video-item') ||
          btn.closest('.module__video-item').dataset.disabled !== 'true'
        ) {
          this.activeBtn = btn;

          this.path = btn.dataset.url;
          // console.log(this.path);

          this.createPlayer(this.path);
        }
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
    if (this.btns.length > 0) {
      const tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.bindTriggers();
      this.bindCloseBtn();
    }
  }
}
