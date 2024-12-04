// Object Notation Practice

// Drill - Student Swap

/*

Once again, imagine you're back in high school—this time, you're working on the school's student roster. 
You've noticed that two students have been mixed up. 
In other words, the information for one student, Jacob, is actually the correct information for another student, Guillermo, and vice versa.

In the code below, change jacob with guillermo.

*/

// Updating key/value pairs of objects

let students = {
    jacob: {
        classes: ["math", "chemistry", "english"],
        grade: 11,
        age: 16,
    },
    guillermo: {
        classes: ["history", "math", "physics"],
        grade: 12,
        age: 17,
    },
};
  
// Write your solution here
// Hint: Use the 'temp' variable to hold on to one value while you swap it for the other.

let temp = students.jacob;

console.log(temp);

students.jacob = students.guillermo;
students.guillermo = temp;

console.log(students);
