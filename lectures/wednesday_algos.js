/* 
Some practice problems for us to work on together!  Edit this file!
DISCLAIMER: Since the code is written by us, it's not 100% guaranteed to be right - because nobody is perfect.
You are encouraged to write your own solutions to these!
*/

/* Parens Valid (from Strings To Do 3):
Valid sets of parentheses always open before they close, for example. 
For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. 
Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.
// can you use modulus to determine if there is an even number of parenthesis?
*/

// Eric - write a function to return true or false given a set of parenthesis
function thisThing(x){
    // for loop to check each index in the string
    // set ) to a variable? to check against % something
    let first = ")";
    let second = "(";
    // looping through the given string
    for(let i=0;i<x.size-1;i++){
        // @ each index checking if a value matches first  or second then against % 2 so that we have two of the first and two of the second value?
        // this currently will compare only values that are duplicated
        if(i[x] %2 == 0){
            // throw another if statement here, to compare i[x] to  either first or second
            if(i[x] == first || i[x] == second){
                return true;
            }
        }else {
            return false;
        }
    }
}
thisThing(test1);
thisThing(test2);
let test1 = Y(3(p)p(3)r)s;
let test2 = N(0)t )0(k;



    /* Integer to Roman Numerals:
    Given a positive integer that is less than 4000, return a string containing that value in Roman numeral
representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000.
Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
*/
// Julian B) 
// sooooo i have to show the values of each character as in I=1, V=5, etc...
const numToLetter ={
    "I": 1,
    "V": 5
}
// my function 
const numToRoman = (num) => {
    //string is the characters at the end that ill add, empty at first
    let string = "";
    for (i in numToLetter) {
        while (num )
    }
}




// vanessa- just winging it. Trying some stuff out! 

function numeraltoletter {
    if (I == '1')
    return 1;
    if (V == '5')
    return 5;
    if (X == '10')
    return 10;
    if (L == '50')
    return 50;
    if (C == '100')
    return 100;
    if (D == '500')
    return 500;
    if (M == '1000')
    return 1000;



    


}
    

/* Reverse an array in place:
Given a numerical array, reverse the order of values, in-place.  The reversed array should have the 
same length, with existing elements moved to other indices so that order of elements is reversed.  
Working 'in-place' means that you cannot use a second array – move values within the array that you 
are given.  Do not use built-in array functions such as splice().
*/

// Rosie :3
const reverseArray = (array) => {
    //need to iterate through the array first brute force?
    // the Math.floor /2 method is to iterate the first half
    for (let i = 0; i < Math.floor(array.length / 2) ; i++) {
        // we are giving temporary the variable of array[i] which can be at 0, 1, 2 etc.
        let temporary = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temporary;
    }
    console.log(array);
}

let diffA = [1,2,3,4,5]
let diffB = [7,2,10,25]
reverseArray(diffA)


/* Zip It
Create a standalone function that accepts two arrays and combines their values sequentially into 
a new array, at alternating indices starting with first array. Extra values from either array should 
be included afterward. Given [1,2] and [10,20,30,40], return a new array containing [1,10,2,20,30,40].
*/

var x = [1,2]
var y = [10,20, 30, 40]
var r = [x.length + y.length]
function combinearray (x, y){
    for ( var i = 0, i < x.length; i++)
    
    
}
combinearray();
