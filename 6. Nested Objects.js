/*  Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street 
properties from a nested object using object destructuring. The function should return an object with these two 
properties. A sample object is given below.

const person = { 
name: "Mithun", 
age: 21,
address:   {
street : "B8,Block B, Industrial Area. 
city:  "Sector 62, Noida",
state: "Uttar Pradesh",

},
};
*/

function extractNameAndStreet(person) {
  // use object destructuring to extract the name and street properties from the address object
  const { name, address: { street } } = person;
  
  // return an object with the name and street properties
  return { name, street };
}

const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8,Block B, Industrial Area",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

const result = extractNameAndStreet(person);
console.log(result);
