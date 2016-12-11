// LIFO / Last in first out

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

console.log(myMenu.storage);

console.log(myMenu.size())

