// Factorial
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 6 * 5!;
// 5! = 5 * 4 * 3 * 2 * 1 = 5 * 4!
// 4! = 4 * 3 * 2 * 1 = 4 * 3!
// 3! = 3 * 2 * 1 = 3 * 2!
// 2! = 2 * 1 = 2 * 1!;
// 1! = 1 * 0!;
// 0! = 1;

let factorial = (num) => { // function factorial() {}
    if (num === 0) { // Base case
        console.log("Base case reached - returning 1");
        return 1;
    } else { // Recursive case
        console.log(`Calling factorial ${num-1}`);
        let product = num*factorial(num-1);
        console.log("Returning " + product);
        return product;
    }
}

console.log(factorial(5));

// When you pass in arrays into functions and change their content, they stay changed!  Arrays and objects in
// JavaScript are mutable!
let x = [5];
let add10 = (myArr) => {
    myArr.push(10);
}
add10(x);
// Function that accepts x and pushes the value 10 to it
console.log(x); // Surprise!  We get [5, 10]!

// From Recursion To Do 5 - Climbing Stairs (first part only)
let climbingStairs = (numStairs) => {
    let allSolutions = []; // Array that will hold all the combinations for climbing the number of stairs given
    /* Helper function that will solve the problem recursively - note the two parameters here:
        curSolutions = Array that will hold all the ways to climb the steps
        stepsLeft = Number of stairs left to climbm
        stepsClimbed = Array holding the current steps chosen
    */
    let rClimbingStairs = (curSolutions, stepsLeft, stepsClimbed) => {
        if (stepsLeft === 0) { // No steps to climb
            curSolutions.push(stepsClimbed); // Push the new solution here
            // Recursion stops
        } else { // At least one step left
            // The "..." operator basically means grab all the values from the given array/object (it's more complicated than that actually)
            rClimbingStairs(curSolutions, stepsLeft - 1, [...stepsClimbed, 1]); // Climb one step - add "1" to current array and decrease steps remaining by 1
            if (stepsLeft >= 2) { // Only choose 2 if we have at least 2 steps left
                rClimbingStairs(curSolutions, stepsLeft - 2, [...stepsClimbed, 2]); // Climb 2 steps - add "2" to current array and decrease steps remaining by 2
            }
        }
    }
    /* 
    Call recursive function - allSolutions will automatically populate; numStairs is the number of stairs we will need
    to climb, and the last piece, [], is an empty array holding the steps climbed so far in terms of 1 or 2 steps
    */
    rClimbingStairs(allSolutions, numStairs, []);
    return allSolutions;
}

console.log(climbingStairs(3));