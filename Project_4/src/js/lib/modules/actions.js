import $ from '../core';

$.prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};

$.prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};

$.prototype.click = function (handler) {
  if (handler) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener('click', handler);
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      this[i].click();
    }
  }
  return this;
};
