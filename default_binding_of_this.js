function person() {
    var fname='pankaj ';
    var lname='dubey';
    console.log(this.fname+this.lname);
}
person()   //default binding of this