//1.

//let
// can not be redeclared
// is block scoped

//const
// can not be redeclared
// is block scoped


//var

// can be redeclared
// is function scoped






//2.

// Objects are collections of key-value pairs
//Objects have key-value pairs (Name;Faith,Sex;Female)
// Use ()
//Unordered

// Arrays are ordered collections of values[apple,banana,mango]
//Arrays have ordered collection of values
//Use []
//Ordered





//3.

//==
//is loose equality that only checks if variable values are equal

//===
//is strict equality that strictly checks if variable values are of the same datatype




//4.

//An event refers to something that happens on html elements
//Examples of events are onclick, onchange, onmouseover
{/*
<h1 id="demo">Hello Uganda</h1>
<button type="button" onclick="myFunction('demo').innerHTML='Hello Uganda'">click me!</button>
 */}
//  <button type="button" onclick="window.print()">tap me!</button> 





//5.
// The forEach() method executes a provided function once for each array element.
//does not return a new array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});

// The map() method creates a new array populated with the results of calling a provided function on every element in the array.
// returns a new array with changed outputs
const digits = [1, 2, 3, 4, 5];
const timesItSelf = digits.map(num => num ** 2);
console.log(timesItSelf);




