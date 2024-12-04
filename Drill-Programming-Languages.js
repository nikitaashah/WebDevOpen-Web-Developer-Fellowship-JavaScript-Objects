// Object Notation Practice
// Drill - Programming Languages

/*

You just learned about the creators of different programming languages, and you want to show off your new knowledge. 
In the code below, add the programming languages 'cobol', 'swift', 'javascript', and 'java' to the languages object. 
The key should be the name of the programming language. 
The value should be the name of the creator of the language, as a string.

cobol: "Grace Hopper";
javascript: "Brendan Eich";
java: "James Gosling";
swift: "Chris Lattner";

*/

// The original languages variable - don't modify it here
let languages = {
    python: "Guido van Rossum",
};

console.log(languages);
  
// Add the other languages and their creators below using dot notation
languages['cobol'] = "Grace Hopper";
languages['javascript'] = "Brendan Eich";
languages['java'] = "James Gosling";
languages['swift'] = "Chris Lattner";

console.log(languages);
