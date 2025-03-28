//1.
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("This is a javascript test")); 

//2.
function sumOfAllEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0) // filters even numbers
              .reduce((sum, num) => sum + num, 0); // sums them up
}

console.log(sumOfAllEvenNumbers([1, 2, 3, 4, 5, 6])); 
 
//3
function productOrSum(num1, num2) {
    if (num1 === num2) {
        return num1 * num2; // returns the product if the numbers are the same
    } else {
        return num1 + num2; // returns the sum if the numbers are different
    }
}

console.log(productOrSum(3, 3));
console.log(productOrSum(3, 4)); 



//4.
function isPalindrome(str) {
    const reversed = str
    .split('')
    .reverse('')
    .join('')

    return str === reversed;

}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
