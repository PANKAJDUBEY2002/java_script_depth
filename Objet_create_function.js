var obj=Object.create(Object.prototype,{
    firstName: {
        value: "pankaj",
        writable: true,
        enumerable: true,
        configurable: true

    }
})
console.log(Object.getOwnPropertyDescriptor(obj,"firstName"));