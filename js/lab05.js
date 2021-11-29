/***
 * Exe 01: Create a function using function declaration named sum with one parameter of Array type, the
 * returned result is the sum of all elements which are greater than 20.
 */
function sum(arr) {
    const sumMin = 20;
    let sum = 0;

    arr.reduce(function(acc, elem, i, array){
        if(acc >= sumMin)
            sum = acc;
        return acc + elem;
    });
    return sum;
}

/**
 * Exe 02: Create a function using function expression named getNewArray with one parameter of String
 * Array, return a new array which contains all string, length is greater than and equal to 5, and
 * contains letter ‘a’.
 * */
const getNewArray = function getNewArray(arr) {
    const minLength = 5;
    const newArr = arr.filter( elem => elem.length >= minLength && elem.includes('a') );
    
    return "["+newArr+"]";
};

/**
 * function to get values
 */
function getValue1() {
    let input1 = document.getElementById("task1").value;
    if(input1)
        document.getElementById("result1").innerHTML = sum(JSON.parse(input1));
    else 
        alert('Invalid Input');
}

function getValue2() {
    let input2 = document.getElementById("task2").value;
    if(input2)    
        document.getElementById("result2").innerHTML = getNewArray(JSON.parse(input2));
    else 
        alert('Invalid Input');
}


window.onload = function(){
    //exercise 01
    getValue1();
    
    //exercise 01
    getValue2();
}



