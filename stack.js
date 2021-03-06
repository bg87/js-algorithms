// LIFO / Last in first out

// With a string as the storage container
var Stack = function() {
    this.storage = '';
}

Stack.prototype.push = function(val) {
    this.storage = this.storage.concat('/' + val);
}

Stack.prototype.pop = function() {
    var meals = this.storage.substring([0], this.storage.lastIndexOf('/')); 
    this.storage = meals;
    return this.storage.slice(meals.length, meals.length - (this.storage.lastIndexOf('/') - meals.length));
}

Stack.prototype.size = function() {
    var length = 0;

    for(var i = 0; i < this.storage.length; i++) {
        if(this.storage[i] === '/') {
            length += 1;
        }
    }
    return length;
}


// With an object as storage

var Stack1 = function(capacity) {
    this.capacity = capacity || Infinity;
    this.storage = {};
    this.count = 0;
}

Stack1.prototype.push = function(val) {
    if(this.count < this.capacity) {
        // take val and add it to this.storage object
        this.storage[this.count++] = val;
        // return number of keys in this.storage
        return this.count;
    }
    return "Already at max capacity";
}

Stack1.prototype.pop = function() {
    var value = this.storage[--this.count];
    delete this.storage[this.count];
    if(this.count < 0) {
        this.count = 0;
    }
    return value;
}

Stack1.prototype.peek = function() {
    return this.storage[this.count - 1];
}

Stack1.prototype.count = function() {
    return this.count;
}

// var stack = new Stack1(5);


