import '../core';

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;

  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findIndex = (item) => item == this[0];

  return childs.findIndex(findIndex);
};

$.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;

  const copy = { ...this };

  for (let i = 0; i < copy.length; i++) {
    const arr = copy[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

$.prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

$.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;

  const copy = { ...this };

  for (let i = 0; i < copy.length; i++) {
    const arr = copy[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copy[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
