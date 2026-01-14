# Stack ADT & Linear Queue ADT

An object-based implementation of two common ADTs in JavaScript using factory functions and prototypal inheritance.

## Components

1.  **Stack (LIFO):** Last-In, First-Out data structure with quantity property.
2.  **Linear Queue (FIFO):** First-In, First-Out data structure with `front` and `back` pointers.

## Performance (Big O)

| Operation                     | Stack | Queue |
| :---------------------------- | :---: | :---: |
| **Insert** (`push`/`enQueue`) | O(1)  | O(1)  |
| **Remove** (`pop`/`deQueue`)  | O(1)  | O(1)  |
| **Peek**                      | O(1)  | O(1)  |
| **Space Complexity**          | O(n)  | O(n)  |

## Usage

### Linear Queue

```javascript
const { createQueue } = require("./queues");

const myQueue = createQueue(5); // Max size: 5

myQueue.enQueue("Andrea");
myQueue.enQueue("Maria");

console.log(myQueue.peek()); // 'Andrea'
console.log(myQueue.deQueue()); // Removes 'Andrea'
console.log(myQueue.getQuantity()); // 1
```

### Stack

```javascript
const { createStack } = require("./stack");

const myStack = createStack(3); // Max size: 3

myStack.Push("Apple");
myStack.Push("Pear");

console.log(myStack.peek()); // 'Pear'
myStack.Pop(); // Removes 'Pear'
console.log(myStack.isEmpty()); // false
```

## 🧪 Running Tests

This project includes a full test suite using Jest as well as a basic-usage.js.

```bash
npm test
```
