For each of the methods associated with each data structure, classify it based on its runtime, using Big O notation.

## Linked List

1.  What is the runtime complexity of `addToTail`?

* O(1) I think...since you have a direct reference to this.tail, and there is no iteration.
  a. What if our list implementation didn't have a reference to the tail of the list in its constructor? What would be the runtime of the `addToTail` method?
  * O(n) I think...since you must iterate over the full length of the linked list to find a given item for each value that is passed in.

2.  What is the runtime complexity of `removeHead`?

    * Again, since there is no iteration being performed, and you have direct access to this.head, the time complexity will be O(1).

3.  What is the runtime complexity of `contains`?

    * O(n)??? because it requires you to iterate through the list of items comparing with the target.

4.  What is the runtime complexity of `getMax`?
    * Similar to #3, O(n)

## Queue

1.  What is the runtime complexity of `enqueue`?
    * O(1)
2.  What is the runtime complexity of `dequeue`?
    * O(1)
3.  What is the runtime complexity of `isEmpty`?
    * O(1)
4.  What is the runtime complexity of `length`?
    * O(1)

## Doubly Linked List

1.  What is the runtime complexity of `ListNode.insertAfter`?
    * O(1)
2.  What is the runtime complexity of `ListNode.insertBefore`?
    * O(1)
3.  What is the runtime complexity of `ListNode.delete`?
    * O(1)
4.  What is the runtime complexity of `DoublyLinkedList.addToHead`?
    * O(1)
5.  What is the runtime complexity of `DoublyLinkedList.removeFromHead`?
    * O(1)
6.  What is the runtime complexity of `DoublyLinkedList.addToTail`?
    * O(1)
7.  What is the runtime complexity of `DoublyLinkedList.removeFromTail`?
    * O(1)
8.  What is the runtime complexity of `DoublyLinkedList.moveToFront`?
    * O(n)
9.  What is the runtime complexity of `DoublyLinkedList.moveToBack`?
    * O(n)
10. What is the runtime complexity of `DoublyLinkedList.delete`?
    * O(1)
      a. Compare the runtime of the doubly linked list's `delete` method with the worst-case runtime of the `Array.splice` method. Which method generally performs better? \* I would guess that `delete` and `Array.splice` would be about the same time complexity. `Array.splice` might be a slower because of the need to reassign index values after one is deleted.

## Binary Search Tree

1.  What is the runtime complexity of `insert`?

    * Since `insert` uses nested if...else statements, I would guess that it is not O(n). I am sure it is not O(1), since there is so much iteration required. Perhaps O(n^2)?

2.  What is the runtime complexity of `contains`?
    * For the same reasons as #1 I would guess O(n^2)
3.  What is the runtime complexity of `getMax`?

    * O(n) perhaps, just because you do have to iterate through the entire tree to check if each value is the max.

4.  What is the runtime complexity of `depthFirstForEach`?

5.  What is the runtime complexity of `breadthFirstForEach`?

6.  [Stretch Question] What is the runtime complexity of your `checkBalanced` function?

## Heap

1.  What is the runtime complexity of your `heapsort` function?

2.  What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

3.  What is the runtime complexity of `bubbleUp`?

4.  What is the runtime complexity of `siftDown`?

5.  What is the runtime complexity of `insert`?

6.  What is the runtime complexity of `delete`?

7.  What is the runtime complexity of `getMax`?
    * This is easy, since the max value is always at the top of the tree, the time complexity here will be O(1).
