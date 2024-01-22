var globalvar="In global";
function outer(name) {
    var msg="good morning";
    function greet() {
        var str="hello ";
        console.log(str+name+"."+msg);
    }
    return greet;
}
var greetfnc=outer("ram");
greetfnc();