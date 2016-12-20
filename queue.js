// FIFO / First in first out 

var Queue = function(capacity) {
    this.capcity = capacity || Infinity;
    this.storage = {};
    this.count = 0;
}

Queue.prototype.enqueue = function(value) {
    if(this.count < this.capcity) {
        this.storage[this.count++] = value;
        return this.count;
    }
    return "At max capacity.";
}

Queue.prototype.dequeue = function() {
    var value = this.storage[0];
    delete this.storage[0];
    this.count--;
    return value;
}

Queue.prototype.peek = function() {
    // => oldest element added collection
    // Similiar to dequeue, but do not remove element from collection
}

Queue.prototype.count = function() {
    // => number of elements in queue
}

var q = new Queue(5);
console.log(q.enqueue('hi'));
console.log(q);
console.log(q.dequeue());
console.log(q);