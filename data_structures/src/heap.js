const heapsort = arr => {
  /* Your code here */
  const heap = new Heap();

  arr.map(item => {
    heap.insert(item);
  });

  const newArr = [];

  while (heap.getSize()) {
    newArr.unshift(heap.delete());
  }

  return newArr;
};

class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.size++;
    this.bubbleUp(index);
  }

  // removes the max value from the heap and then returns it

  // Note: This tripped me up a bit, until I looked at what it
  // was doing, and realized that that .pop is used, NOT .shift.
  // Because of this, the max value item in the heap will be at
  // the far left of the array, thus arranged smallest to largest,
  // not largest to smallest.
  delete() {
    if (this.storage.length === 2) {
      this.size--;
      return this.storage.pop();
    } else if (this.storage.length === 1) {
      return this.storage[0];
    }
    this.size--;

    const max = this.storage[1];

    // this.storage.pop() removes the last item from this.storage and sets it as the new this.storage root (index 1)??x

    this.storage[1] = this.storage.pop();

    this.siftDown(1);
    return max;
  }

  getMax() {
    return this.storage[1];
  }

  getSize() {
    return this.size;
  }

  bubbleUp(index) {
    const parent = Math.floor(index / 2);
    if (parent > 0 && this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [
        this.storage[index],
        this.storage[parent]
      ];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const child1 = index * 2;
    const child2 = index * 2 + 1;
    let maxChild;

    if (this.storage[child1] !== undefined) {
      if (this.storage[child2] === undefined) {
        maxChild = child1;
      } else if (this.storage[child2] !== undefined) {
        maxChild =
          this.storage[child1] > this.storage[child2] ? child1 : child2;
      }

      if (this.storage[index] < this.storage[maxChild]) {
        [this.storage[maxChild], this.storage[index]] = [
          this.storage[index],
          this.storage[maxChild]
        ];
        this.siftDown(maxChild);
      }
    }
  }
}

const arr = [1, 45, 78, 36, 58, 9, 67, 46];
console.log(heapsort(arr));

module.exports = {
  Heap,
  heapsort
};
