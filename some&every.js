/// some and every in JavaScript.

//  Every checks every elemnt elemnts of an array that passes the call back function test and return ture if all the element of array passes the test.

//  Some checks if any one element of an array passes the call back function test and return true.


function allEvens(ary){
    return ary.every((value) => {
        return value % 2 === 0;
    });
}

allEvens([2,4,6,8]);


let pets = (ary) => {
    return ary.some((value) => {
        return value[0] === 'd';
    });
};

pets(['dog','hen','cats']);
