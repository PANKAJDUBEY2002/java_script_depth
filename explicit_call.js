function person() {
    console.log(this.firstname+this.lastname);
}
var firstname="siddh ";
var lastname="jain";
bihar={
    firstname: 'Data ',
    lastname: 'kumar'
};
up={
    firstname: 'pankaj ',
    lastname: 'Dubey'
};
person.call(bihar);
person.call(up);