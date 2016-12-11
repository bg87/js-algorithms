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
    return this.storage.length;
}

var myMenu = new Stack();
myMenu.push('pizza');
myMenu.push('steak');
console.log(myMenu.storage);
console.log(myMenu.pop());
console.log(myMenu.storage);

