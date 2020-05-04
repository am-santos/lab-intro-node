class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  load(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      const sum = this.items.reduce((acc, val) => acc + val, 0);
      return sum;
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      const avgSum = this.sum();
      return Math.floor((avgSum / this.items.length) * 100) / 100;
    }
  }
}

module.exports = SortedList;
