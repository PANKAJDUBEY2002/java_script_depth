me={
    name: 'pankaj',
    great : function() {
        console.log("my name "+this.name);
    }
}
setTimeout(me.great.bind(me),2);



// default binding is hard binding which return a function