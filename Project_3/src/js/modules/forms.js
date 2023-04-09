// import { postData } from '../services/requests';

export default class Forms {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');

    this.message = {
      loading: 'Loading...',
      success: 'Thank you! Our manager will call you back soon',
      failure: 'Something went wrong :(',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png',
    };

    this.path = 'assets/question.php';
  }

  static async postData(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  }

  clearInputs() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
  }

  static checkTextInputs() {
    const mailInputs = document.querySelectorAll('[type=email]');

    mailInputs.forEach((input) => {
      input.addEventListener('keypress', (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
      input.addEventListener('paste', (e) => {
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        // console.log(paste);
        if (paste.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }

  static initMask() {
    const setCursorPosition = (pos, elem) => {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        const range = elem.createTextRange();
        range
          .collapse(true)
          .moveEnd('character', pos)
          .moveStart('character', pos)
          .select();
      }
    };

    function createMask(event) {
      if (event.target.selectionStart < 2) {
        setCursorPosition(2, event.target);
      }

      const matrix = '+1 (___) ___-____';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, (a) =>
        /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ''
          : a
      );

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    const inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach((input) => {
      ['click', 'input', 'focus', 'blur'].forEach((eventName) => {
        input.addEventListener(eventName, createMask);
      });
    });
  }

  init() {
    Forms.checkTextInputs();
    Forms.initMask();

    this.forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
        margin-top: 15px;
        font-size: 18px;
        color: grey;
        `;
        form.parentNode.appendChild(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData = new FormData(form);

        Forms.postData(this.path, formData)
          .then((res) => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 6000);
          });
      });
    });
  }
}
