const queuePrototype = {
  enQueue: function (item) {
    if (this.isFull()) {
      return "error";
    }
    this.storage[this.back] = item;
    this.back++;
  },

  isFull: function () {
    const queueSize = this.getQuantity();
    if (queueSize >= this.maxSize) {
      return true;
    }
  return false; 
  },

  isEmpty: function () {
    return this.back === this.front;
  },

  deQueue: function () {
    if(this.isEmpty()) {
      return "Error"   
    } 
    delete this.storage[this.front];
    this.front++;
  },

  peek: function() {
    if(this.isEmpty()) {
      return "Error"   
    } 
    return this.storage[this.front];
  },

  getQuantity: function () {
    return this.back - this.front;
  },
};
function createQueue(maxSize) {
  const queueObject = Object.create(queuePrototype);
  queueObject.maxSize = maxSize;
  queueObject.front = 0;
  queueObject.back = 0;
  queueObject.storage = {};

  return queueObject;
}

module.exports = { createQueue, queuePrototype };
