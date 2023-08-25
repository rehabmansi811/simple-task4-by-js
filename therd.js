function isPalindrome(string, caseSensitive = true) {
  // Convert the string to lowercase if case sensitivity is not enabled.
  if (!caseSensitive) {
    string = string.toLowerCase();
  }

  // Reverse the string.
  reversedString = string.split("").reverse().join("");

  // Compare the original string to the reversed string.
  return string === reversedString;
}

function main() {
  // Prompt the user for a string.
  var string = prompt("Enter a string: ");
  // Prompt the user whether to consider case sensitivity.
  var caseSensitive = prompt("Do you want to consider case sensitivity? (y/n) ");
  caseSensitive = caseSensitive.toLowerCase() === "y";

  // Check if the string is a palindrome.
  var isPalin  = isPalindrome(string, caseSensitive);

  // Print a message to the user.
  if (isPalin ) {
    var message = "The string '" + string + "' is a palindrome.";
    alert(message);
  } else {
    var message = "The string '" + string + "' is not a palindrome.";
    alert (message);
  }
}

main();