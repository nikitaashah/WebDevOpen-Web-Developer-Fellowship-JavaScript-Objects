// Demo: Objects in a loop

/*

In the example below, you'll see an array with multiple objects inside it. 
The code uses a for loop to check each object in the array. 
Specifically, the for loop is checking whether each object has attending set to true or false.

*/

let partyPeople = [
    {
        name: "Joe",
        attending: false
    },
    {
        name: "Jasmine",
        attending: true
    },
    {
        name: "Julio",
        attending: false
    },
    {
        name: "Julia",
        attending: true
    },
];
  
/*
loop through each item
check if the person is attending
if they are attending, say they are partying
otherwise, say they are burnt out
*/

for (let i = 0; i < partyPeople.length; i++) {
    if (partyPeople[i].attending) {
        console.log(partyPeople[i].name + " is partying!");
    } else {
        console.log(partyPeople[i].name + " is burnt out on partying =(");
    }
}
