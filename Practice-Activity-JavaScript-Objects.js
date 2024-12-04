// Initial code
let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: "Bob"
};

// Listing all the objects
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

// Delete the previousOwner property
delete product.previousOwner;
console.log(product);

// Update the doesItWork property to true
product['doesItWork'] = true;
console.log(product);

// Create a conditional that will check if the price of the product is higher than 100. In case it is, add a new property discountPercentage with a value of 10.
if (product.price > 100) {
    product.discountPercentage = 10;
}
console.log(product);

// Using the price and discountPercentage properties (and a little bit of math 😉 ) update the price property to be the discounted one! Price minus 10%
product.price -= product.price * (product.discountPercentage / 100);
console.log(product);

// Finally, create a conditional that, using the in operator, will check if the discountPercentage property exists in the object and, if so, create a console.log() that uses the three property values to look something like this: "We got some headphones on sale for just $108, that's 10% off!"
if ('discountPercentage' in product) {
    console.log(`We got some headphones on sale for just ${product.price}, that's ${product.discountPercentage}% off!`);
}


/////// Output ////////

/*

name: headphones
price: 120
doesItWork: false
previousOwner: Bob
{ name: 'headphones', price: 120, doesItWork: false }
{ name: 'headphones', price: 120, doesItWork: true }
{
  name: 'headphones',
  price: 120,
  doesItWork: true,
  discountPercentage: 10
}
{
  name: 'headphones',
  price: 108,
  doesItWork: true,
  discountPercentage: 10
}
We got some headphones on sale for just 108, that's 10% off!

=== Code Execution Successful ===

*/