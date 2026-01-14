const { createStack, stackPrototype } = require("../src/stack.js");

describe("createStack()", () => {
  describe("Stack Creation", () => {
    test("check that quantity is 0", () => {
      const output = createStack();
      expect(output.quantity).toBe(0);
    });

    test("should have a property storage set to an empty object ", () => {
      const testStack = createStack();
      expect(testStack).toHaveProperty("storage", {});
    });

    test("should have a property called maxSize that defaults to 5", () => {
      const testStack = createStack();
      expect(testStack).toHaveProperty("maxSize", 5);
    });

    test("maxSize can be passed as an argument to override the default", () => {
      const testStack = createStack(7);
      expect(testStack).toHaveProperty("maxSize", 7);
    });
  });

  describe("push()", () => {
    test("push works on an empty stack", () => {
      const testStack = createStack();
      testStack.push("apple");
      expect(testStack.storage).toEqual({ 1: "apple" });
      expect(testStack.storage).toHaveProperty("1", "apple");
    });

    test("checks that stack key increases correctly based on quantity ", () => {
      const testStack = createStack();
      testStack.push("apple");
      testStack.push("salad");
      testStack.push("pear");
      expect(testStack.storage).toEqual({ 1: "apple", 2: "salad", 3: "pear" });
      expect(testStack.quantity).toBe(3);
    });

    test("checks that it doesn't push items if max size exceeded ", () => {
      const testStack = createStack(2);
      testStack.push("apple");
      testStack.push("salad");

      const result = testStack.push("pear");
      expect(testStack.storage).toEqual({ 1: "apple", 2: "salad" });
      expect(result).toBe("Push failed: Stack is full");
    });
  });

  describe("pop()", () => {
    test("should delete one item from the stack if the stack exists and is not empty", () => {
      const testStack = createStack();
      testStack.push("pear");
      testStack.push("salad");
      testStack.push("apple");
      testStack.pop();
      expect(testStack.storage).toEqual({ 1: "pear", 2: "salad" });
    });

    test("should return error message if object is empty", () => {
      const testStack = createStack();
      const result = testStack.pop();
      expect(result).toBe("Pop failed: Stack is empty");
      expect(testStack.storage).toEqual({});
    });

    test("should decrease quantity by one", () => {
      const testStack = createStack();
      testStack.push("pear");
      testStack.push("salad");
      testStack.push("apple");
      expect(testStack.quantity).toBe(3);
      testStack.pop();
      expect(testStack.quantity).toBe(2);
    });

    test("should return the item that was popped", () => {
      const testStack = createStack();
      testStack.push("pear");
      testStack.push("salad");
      expect(testStack.pop()).toBe("salad");
    });
  });
});

describe("isEmpty()", () => {
  test("should return true if stack is empty", () => {
    const testStack = createStack();
    expect(testStack.isEmpty()).toEqual(true);
  });

  test("should return false if stack has one or more items", () => {
    const testStack = createStack();
    testStack.push("pear");
    expect(testStack.isEmpty()).toEqual(false);
  });
});

describe("isFull()", () => {
  test("should return false if stack isn't full", () => {
    const testStack = createStack();
    expect(testStack.isFull()).toEqual(false);
  });

  test("should return true if stack is full", () => {
    const testStack = createStack(2);
    testStack.push("pear");
    testStack.push("salad");
    expect(testStack.isFull()).toEqual(true);
  });
});
describe("peek()", () => {
  test("should return the top item without removing it", () => {
    const testStack = createStack();
    testStack.push("apple");
    testStack.push("banana");

    expect(testStack.peek()).toBe("banana");
    expect(testStack.quantity).toBe(2);
  });

  test("should return undefined if stack is empty", () => {
    const testStack = createStack();
    expect(testStack.peek()).toBeUndefined();
  });
});
