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
    this.storage = [];
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.bubbleUp(index);
  }

  // removes the max value from the heap and then returns it

  // Note: This tripped me up a bit, until I looked at what it
  // was doing, and realized that that .pop is used, NOT .shift.
  // Because of this, the max value item in the heap will be at
  // the far left of the array, thus arranged smallest to largest,
  // not largest to smallest.
  delete() {
    if (!this.storage.length) return null;
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    this.size--;

    const max = this.storage[1];

    // this.storage.pop() removes the last item from this.storage and sets it as the new this.storage root (index 1)??x

    this.storage[1] = this.storage.pop();

    this.siftDown(1);

    return max;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
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
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maxChild;
    
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      maxChild = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      maxChild = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      maxChild = rightChildIndex;
    } 


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
