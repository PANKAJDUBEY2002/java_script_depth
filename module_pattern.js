var MyModule=function mymodule() {
    var pr="this is private variable";
    
    return {

        add: function (str) {
            console.log(str+" ths job is added sucessfully");
            console.log("accessible : "+pr);
        },
        edit: function (str) {
            console.log(str+" ths job is edited sucessfully");
            console.log("accessible : "+pr);
        },
        delete: function (str) {
            console.log(str+" ths job is deleteed sucessfully");
            console.log("accessible : "+pr);
        }
    }
}
var todo=MyModule();
todo.add("fan");
todo.delete("cooler");
todo.edit("washing machine");