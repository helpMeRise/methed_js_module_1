'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set newWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    }
  },
  set newHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    }
  },
  get perimeter() {
    return ((this.width + this.height) * 2) + 'см';
  },
  get square() {
    return (this.width * this.height) + 'см';
  },
};


console.log(rectangle.perimeter);
console.log(rectangle.square);
