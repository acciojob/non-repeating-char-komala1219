//your JS code here. If required.
function firstNonRepeatedCharacter(str) {
  let charCount = {};

  // Loop through the string and populate the charCount object
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Loop through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeated character is found
  return null;
}

const inputStr = prompt("Enter a string");
const result = firstNonRepeatedCharacter(inputStr);
alert(result ? `The first non-repeated character is: ${result}` : "All characters are repeated");
