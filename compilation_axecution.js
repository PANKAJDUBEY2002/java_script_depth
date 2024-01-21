var msg="good morning";
function greet() {
    console.log("messagee before : "+msg);
    var msg="good evening";
    console.log("messagee after : "+msg);

}
function doactivity(activity) {
    console.log("activity beforre : "+activity);
    activity="play";
    console.log("activity after : "+activity);
    console.log("sport beforre : "+sport);
    sport="football";
    console.log("sport after : "+sport);
}
var something="hello";
greet();
doactivity(something);
console.log("sport global : "+sport);
