const stackPrototype = {
  push: function (item) {
    // no to check for null/undefined as factory function is being used

    if (this.quantity >= this.maxSize) {
      return "Push failed: Stack is full";
    }
    const keyName = this.quantity + 1;

    this.storage[keyName] = item;
    this.quantity++;

    // normally we want push on a stack to return it's new size
    return this.quantity;
  },
  isEmpty: function () {
    return this.quantity === 0;
  },
  isFull: function () {
    return this.quantity >= this.maxSize;
  },
  peek: function () {
    //as per standard JS for missing item we return undefined
    if (this.isEmpty()) {
      return undefined;
    }
    return this.storage[this.quantity];
  },
  pop: function () {
    let result;

    //handles missing storage
    if (this.isEmpty()) {
      return "Pop failed: Stack is empty";
    }

    //pops last element and reduces quantity
    const itemToPopKey = this.quantity;
    const itemToPop = this.storage[itemToPopKey];

    delete this.storage[itemToPopKey];
    this.quantity--;

    //we return the item we popped as it may be needed and it's now gone from the stack
    return itemToPop;
  },
};

function createStack(maxSize = 5) {
  const stackObject = Object.create(stackPrototype);

  stackObject.quantity = 0;
  stackObject.storage = {};
  stackObject.maxSize = maxSize;

  return stackObject;
}

module.exports = { createStack, stackPrototype };
