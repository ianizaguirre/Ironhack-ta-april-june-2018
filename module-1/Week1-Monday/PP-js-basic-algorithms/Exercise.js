/* ==========
=== Exercise ===
========== */
// Nizars way: https://github.com/ironhack-miami-webdev-october-2017/lab-javascript-basic-algorithms/blob/master/solution-code/basic-algorithms.js

/* ==========
===  Names and Input  ===
========== */

// (1) Create a variable hacker1 with the DRIVER'S name
var hacker1 = 'Ian';

// (2) Print "The driver's name is XXXX"
console.log(" The driver's name is " + hacker1);

// (3) Create a variable hacker2 and ask the user for the NAVIGATOR'S name
var hacker2 = 'Anthony';
var promptAnswer = hacker2; //= window.prompt("What is the " + hacker2 + " name?");

// (4) Print "The navigator's name is YYYY"
console.log("The navigator's name is " + promptAnswer);

/* ==========
===  Conditionals  ===
========== */
// (5) Depending on which name is longer, print: etc...
if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters');
}

/* ==========
===  Loops  ===
========== */
// (6) Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
//----
//----------- var driverBig = hacker2.toUpperCase().split("").join(" ");
// ---- another way (nizar):

/*
function reverse(string) {
  var result = '';
  for (var i = string.length - 1; i >= 0; i--)

  result += string[i];

  console.log(result);
}
reverse("dog");
*/

//----
// Step 1
var driverBig = hacker1;
console.log(driverBig);
// Step 2
driverBig = driverBig.toUpperCase();
console.log(driverBig);
// Step 3
driverBig = driverBig.split('');
console.log(driverBig);
// Step 4
driverBig = driverBig.join(' ');
console.log(driverBig);
// End Result
console.log(driverBig);

// ----------
// (7) Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
// ----------
// Step 1
var navigatorRev = hacker2;
console.log(navigatorRev);
console.log(typeof navigatorRev);
//-----
// We want to make our string into an Array, so it can have Array Properties, since reverse() is an Array Property
//-----
// Step 2
navigatorRev = navigatorRev.split('');
console.log(navigatorRev);
console.log(typeof navigatorRev);
//-----
// Now we can use the reverse() Array Property
//-----
// Step 3
//-----
navigatorRev = navigatorRev.reverse();
console.log(navigatorRev);
//-----
// Now lets change our Array, back into a String
//-----
// Step 4
//-----
// End Result
navigatorRev = navigatorRev.join('');
console.log(navigatorRev);
console.log(typeof navigatorRev);

// ----------
// (8) Depending on the lexicographic order (alphabetical order) of the strings, print: ... Etc...
// ----------

console.log(hacker1);
console.log(hacker2);

if (hacker1 < hacker2) {
  // "If --I-- comes BEFORE --A-- in the alphabet range"
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  // "If --I-- comes AFTER --A-- in the alphabet range"
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}

/* ==========
===  Bonus Time!  ===
========== */
// (9) Ask the user for a new string and check if it's a Palindrome. Examples of palindromes: ... Etc...
var palindromeBlock = 'A man, a plan, a canal, Panama!'; //= window.prompt("Enter some text, and we will check if it is a Palindrome!");

var result;
function reverse(string) {
  result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  result = result.split(' ').join('');
  original = string.split(' ').join('');

  console.log(original);
  console.log(result);
  return result;
}

function compare() {
  original = original.toLowerCase();
  result = result.toLowerCase();

  console.log(original);
  console.log(result);

  original = original.match(/\w/g).join('');
  result = result.match(/\w/g).join('');

  console.log(original);
  console.log(result);

  var x = original.localeCompare(result) == 0 ? 'YES' : 'NOPE';
  console.log(x);
  return x;
}

function palindromeChecker(string) {
  reverse(string);
  console.log(original);
  console.log(result);

  return compare();
}

var answer = palindromeChecker(palindromeBlock);
console.log(answer);
