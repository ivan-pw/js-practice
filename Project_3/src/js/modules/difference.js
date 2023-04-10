import error from './error';

export default class Difference {
  constructor({ oldOfficer = null, newOfficer = null, items = null }) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      // this.items = items;
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (e) {
      error(e);
    }
  }

  static hideItems(items) {
    // [this.oldItems, this.newItems].forEach((item) => {
    //   item.forEach((item2, i, arr) => {
    //     if (i !== arr.length - 1) {
    //       item2.style.display = 'none';
    //     }
    //   });
    // });

    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }

  bindTriggers(container, items, counter) {
    container.querySelector('.plus').addEventListener('click', () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }

  init() {
    try {
      Difference.hideItems(this.oldItems);
      Difference.hideItems(this.newItems);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    } catch (e) {
      error(e);
    }
  }
}
