// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//Solution

function reverseWords(str) {
    return  str.split(" ").map(function(palabra) {
          return palabra.split("").reverse().join("") }).join(" ");
}