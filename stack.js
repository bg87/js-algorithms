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

var myMenu = new Stack();
myMenu.push('pizza');
myMenu.push('steak');


// With an object as storage

var Stack1 = function() {
    this.storage = {};
}

Stack1.prototype.push = function(val) {
    // take val and add it to this.storage object
    // return number of keys in this.storage
}

Stack1.prototype.pop = function() {
    // remove most recent item from this.storage object
    // return removed item
}

Stack1.prototype.peek = function() {
    // return most recent added value
}

Stack1.prototype.count = function() {
    // return number of elements in stack
}

