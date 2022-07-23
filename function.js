// task one
function stringlength (string) {
    let str = string.length
    if(str === " " || str > 10) {
        console.log("error");
    }else{
        return str;
    }

}

// task two
function reverseString(string) {
    let str = string.split('').reverse().join("");
    return str;
}

//task three
 
class calculator{
    constructor (){}

    addition(a, b){
    return a + b;
    }

    subtraction(a, b){
    return a - b;
    }

    multiply(a, b){
    return a * b;
    }

    division(a, b){
    div = a / b;
    }
}

module.exports = { stringlength, reverseString, calculator }
 
