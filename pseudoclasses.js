// Pseudoclassical js contstructor pattern


function Car(doors, engine, trans) {
    // this = {};
    this.doors  = doors;
    this.engine = engine;
    this.trans  = trans;

    // return this;
}

var car1 = new Car(4, 6.0, "automatic");
console.log(car1);

Car.prototype.countDoors = function() {
    console.log("I have " + this.doors + " doors.");
};

car1.countDoors();