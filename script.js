//your JS code here. If required.
function firstNonRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null;
}

const inputStr = prompt("Enter a string");
const result = firstNonRepeatedCharacter(inputStr);
alert(result ? `The first non-repeated character is: ${result}` : "All characters are repeated");
