let user = {
    name: 'Ana',
    age: 27
};
  
console.log('name' in user);    // => true
console.log('age' in user);     // => true
console.log('course' in user);  // => false
