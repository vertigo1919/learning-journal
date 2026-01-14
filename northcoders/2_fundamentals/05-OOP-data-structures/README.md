# Stack & Linear Queue ADTs

An object-based implementation of common linear data structures in JavaScript using factory functions and prototypal inheritance.

## 📦 Components

1.  **Stack (LIFO):** Last-In, First-Out data structure (Size limited).
2.  **Linear Queue (FIFO):** First-In, First-Out data structure with `front` and `back` pointers.

## ⚡ Performance (Big O)

| Operation                     | Stack | Queue |
| :---------------------------- | :---: | :---: |
| **Insert** (`push`/`enQueue`) | O(1)  | O(1)  |
| **Remove** (`pop`/`deQueue`)  | O(1)  | O(1)  |
| **Peek**                      | O(1)  | O(1)  |
| **Space Complexity**          | O(n)  | O(n)  |

## 🚀 Usage

### Linear Queue

```javascript
const { createQueue } = require("./queues");

const myQueue = createQueue(5); // Max size: 5

myQueue.enQueue("Apple");
myQueue.enQueue("Banana");

console.log(myQueue.peek()); // 'Apple'
console.log(myQueue.deQueue()); // Removes 'Apple'
console.log(myQueue.getQuantity()); // 1
```

### Stack

```javascript
const { createStack } = require("./stack");

const myStack = createStack(3); // Max size: 3

myStack.customPush("Page 1");
myStack.customPush("Page 2");

console.log(myStack.peek()); // 'Page 2'
myStack.customPop(); // Removes 'Page 2'
console.log(myStack.isEmpty()); // false
```

## 🧪 Running Tests

This project includes a full test suite using Jest.

```bash
npm test

```

```

```
