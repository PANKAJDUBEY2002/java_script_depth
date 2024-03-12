function person() {
    var fname='pankaj ';
    var lname='dubey';
    console.log(this.fname+this.lname);
}
any={
    fname : 'Data ',
    lname : 'kumar',
    per : person

}
any.per();  //default binding of this