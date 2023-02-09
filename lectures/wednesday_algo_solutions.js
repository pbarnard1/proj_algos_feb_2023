// These solutions were written by Adrian.  They're not 100% guaranteed to be correct, so test these and write your own
// solutions!

const isValidParens = (inputStr) => {
    let leftParensCount = 0; // Count unpaired left parentheses
    for (let curChar of inputStr) { // Or could do inputStr.charAt(i) with old-fashioned loop, where i is an index
        if (curChar==="(") { // Add 1 if "(" found
            leftParensCount++;
        } else if (curChar===")") { // Subtract 1 if ")" found
            leftParensCount--;
        }
        if (leftParensCount < 0) { // Have an unpaired ")" if count is -1
            return false;
        }
    }
    return leftParensCount === 0; // Only value if we do NOT have any unpaired "(" remaining
}

console.log(isValidParens("())"));
console.log(isValidParens("(())"));
console.log(isValidParens("((())"));

const convertToRomanNumeral = (value) => {
    let outputStr = "";
    while (value >= 1000) {
        outputStr += "M";
        value -= 1000;
    }
    if (value >= 900) {
        outputStr += "CM";
        value -= 900;
    }
    if (value >= 500) {
        outputStr += "D";
        value -= 500;
    }
    if (value >= 400) {
        outputStr += "CD";
        value -= 400;
    }
    while (value >= 100) {
        outputStr += "C";
        value -= 100;
    }
    if (value >= 90) {
        outputStr += "XC";
        value -= 90;
    }
    if (value >= 50) {
        outputStr += "L";
        value -= 50;
    }
    if (value >= 40) {
        outputStr += "XL";
        value -= 40;
    }
    while (value >= 10) {
        outputStr += "X";
        value -= 10;
    }
    if (value === 9) {
        outputStr += "IX";
        value -= 9;
    }
    if (value >= 5) {
        outputStr += "V";
        value -= 5;
    }
    if (value === 4) {
        outputStr += "IV";
        value -= 4;
    }
    while (value > 0) {
        outputStr += "I";
        value--;
    }
    return outputStr;
}

/* BONUS: Convert Roman numeral to string (might not be 100% correct) */
const convertRomanNumeralToValue = (inputStr) => {
    let curTotal = 0;
    let valueObj = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1    
    };
    for (let i = 0; i < inputStr.length; i++) {
        let curChar = inputStr.charAt(i); // Get current character
        if (i > 0) { // Edge cases with subtraction
            if (curChar === "M" && inputStr.charAt(i-1) === "C") { // CM = 900
                curTotal += 800; // Accounts for "C" from before being added
            } else if (curChar === "D" && inputStr.charAt(i-1) === "C") { // CD = 400
                curTotal += 300; // Accounts for "C" from before being added
            } else if (curChar === "C" && inputStr.charAt(i-1) === "X") { // XC = 90
                curTotal += 80; // Accounts for "X" from before being added
            } else if (curChar === "L" && inputStr.charAt(i-1) === "X") { // XL = 40
                curTotal += 30; // Accounts for "X" from before being added
            } else if (curChar === "X" && inputStr.charAt(i-1) === "I") { // IX = 9
                curTotal += 8; // Accounts for "I" from before being added
            } else if (curChar === "V" && inputStr.charAt(i-1) === "I") { // IV = 4
                curTotal += 3;
            } else { // Get value of current letter otherwise
                curTotal += valueObj[curChar];
            }
        } else {
            curTotal += valueObj[curChar];
        }
    }
    return curTotal;
}


const reverseArray = (array) => {
    // Switch values using a temporary variable - note we stop halfway through (the array.length / 2 part)
    for (let i = 0; i < array.length / 2; i++) {
        let tempVar = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempVar;
    // More advanced:
    // [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
    }
}

const zipIt = (arr1, arr2) => {
    let i = 0; // Starting indices
    let j = 0;
    let newArr = [];
    // Go through both arrays - as long as there are values to grab from both of them
    while (i < arr1.length && j < arr2.length) {
        newArr.push(arr1[i]);
        newArr.push(arr2[j]);
        i++;
        j++;
    }
    // If the first array is empty, go through the remaining values in the second array
    if (i === arr1.length) {
        while (j < arr2.length) {
            newArr.push(arr2[j]);
            j++;
        }
    } else if (j === arr2.length) { // Vice versa: push remaining values from first array
        while (i < arr1.length) {
            newArr.push(arr1[i]);
            i++;
        }
    }
    return newArr;
}