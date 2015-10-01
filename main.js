// ---------------------
// Define a function max() that takes two numbers as arguments and returns 
//the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return 'Neither number is larger.';
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns 
//the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return 'No one number is greatest.';
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and 
//returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  // if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". 
//That is, double every consonant and place an occurrence of "o" in between. 
//For example, translate("this is fun") should return the string "tothohisos isos 
//fofunon".
// ---------------------

function rovarspraket(phrase){
  // var vowels = ['a', 'e', 'i', 'o', 'u']
  //var myArray = phrase.split('');
  //var newletters = [];

  //myArray.forEach(function(x){
    //if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {

    //}
  //}
  // if (letters != ' ' || 'a' || 'e' || 'i' || 'o' || 'u') {
    // letters = letters + 'o' + letters;
// }


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, 
//reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(myString){
  var myArray = myString.split('');
  var revLetters = myArray.reverse();
  var wholeRev = revLetters.join('');
  return wholeRev.toString();
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the 
//length of the longest one.
// ---------------------

function findLongestWord(words){
  // var wdLength = words.length();
  // var reduce = wdLength.reduce(function(longest, current){
    // if (current > longest) {
      // longest = current;
    // }
  // });
// }

  // words.length.reduce(function(largest, current) {
    // if (current > largest) {
      // largest = current;
    // }
    // return largest;





// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer 
//i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  // if (.length > i) -->newArray
  // return newArray.toString
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing 
// of the characters contained in it. Represent the frequency listing as a Javascript 
// object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
// .indexOf




//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
}














