function Vehicle(wheels,type) {
    this.wheels=wheels||4;
    this.type=type||'diesel';

}
function Car(make,model,year) {
    Vehicle.call(this);
    this.make=make;
    this.model=model;
    this.year=year;
}
Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;
Vehicle.prototype.run="auto";
var Car1=new Car("Tesla","Model X",2017);
var Car2=new Car("BMW","XS",2018);