function person() {
    var firstName="Akhilesh"
    var lastName="Patel"
    console.log(this,firstName,this.lastName)
}
person()



//here in console log undefined is print because this contain reference og global