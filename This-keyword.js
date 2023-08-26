// arrow function behaves differently with objects. like if you wana create an object with an arrow funciton you will get and error or may be undefined. Because this keyword in method refers to the scope of that function

let name = {
    fName : "Muhammad",
    lName : "Shakir",
    intro : () => {
        return `Hello World myself : ${this.fName} ${this.lName}`
    }
}

console.log(name.intro()); // Hello World myself : undefined undefined

// why they are showing undefined because arraow function behaves differently with methods. if you create a function using an arrow function then this keyword refer to the window object inside that function.

// write way to do this.

let myName = {
    fName : "Muhammad",
    lName : "Shakir",
    intro : function () {
        return `Hello World myself : ${this.fName} ${this.lName}`
    },
    introPrint : function (){
        setTimeout(() => {
            console.log(this.intro());
        }, 2000)
    }
};

myName.introPrint(); // Hello World myself : Muhammad Shakir
