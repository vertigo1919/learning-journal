const { createQueue, queuePrototype } = require("../src/queues");
const { createStack, stackPrototype } = require("../src/stack.js");

//initialise a new stack with a default max size of 5
const stack = createStack();

//push 5 items and check push return value
console.log("Pushing 'banana'...");
const newQuantity = stack.push("banana");
console.log(` Push Successful, updated quantity is: ${newQuantity}`);

console.log("Pushing 4 more items...");
stack.push("apple");
stack.push("pineapple");
stack.push("pear");
stack.push("cherry");

//overflow
console.log("Pushing 'avocado' (Overflow)...");
const overflowMsg = stack.push("avocado");
console.log(` -> Returned: "${overflowMsg}"`);

//pop
console.log("Popping item...");
const poppedItem = stack.pop();
console.log(
  ` -> Popped succeful: "${poppedItem}" has been removed from the stack`
);

//final Stack state check with peek
console.log("\n--- FINAL STATE ---");
console.log(stack);

//other methods checks
console.log(
  "Is stack empty? ",
  stack.isEmpty(),
  "there are ",
  stack.quantity,
  " items"
);

console.log(
  "Is stack full? ",
  stack.isFull(),
  "there are ",
  stack.quantity,
  " items and max size is: ",
  stack.maxSize
);

console.log("Let's peek into the stack, the top item is  ", stack.peek());
