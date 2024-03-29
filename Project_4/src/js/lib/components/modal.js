import $ from '../core';

$.prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });

    const closeElements = document.querySelectorAll(`${target} [data-close]`);

    closeElements.forEach((elem) => {
      $(elem).click(() => {
        $(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    $(target).click((e) => {
      // console.log(e.target.classList);
      if (e.target.classList.contains('modal')) {
        $(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    // buttons = {count: num, settings: [[text, classNames=[], close, callback]]}

    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      const btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }
      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    // <button class="btn btn-danger" data-close>Close</button>
    // <button class="btn btn-success">Save changes</button>

    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <button class="close" data-close>
          <span>&times;</span>
        </button>
        <div class="modal-header">
          <div class="modal-title">${text.title}</div>
        </div>
        <div class="modal-body">${text.body}</div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
    `;

    modal.querySelector('.modal-footer').append(...buttons);

    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

$('[data-toggle="modal"]').modal();
