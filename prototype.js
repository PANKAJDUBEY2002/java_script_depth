function person(firstName,lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}
var me=new person("shahid","khan");
person.prototype.city="Bhopal";
var you=new person("saurabh","shukla");
me.city="Austin";
person.prototype.fullName=function() {
    return this.firstName+this.lastName;
}