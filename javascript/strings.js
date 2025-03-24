const name='anjali';
const rollno = 2131268;
console.log(`The name of student is ${name} and  rollno is ${rollno}`);
console.log(name[0]);  //acessing the letter by index
 //this will return empty object but acutally its not empty it holds all the methods


//methods of strings///

const newName =new String('meenakshi');   //for assigning thenew string
console.log(`The name of student is ${newName} and  rollno is ${rollno}`);

console.log(newName.length) // for checking the length
console.log(newName.toUpperCase()) // for chnaging string into uppercase
console.log(newName.charAt(2))   // for accesing the character by index
console.log(newName.indexOf('e')) // for checking the index by giving character
console.log(newName.substring(0,4)); /// for substring it doesnt obey -ve values
const anotherString ='harsh';
console.log(anotherString.slice(-5, 4)); // for printing particular number and it takes negative value too

const stringOne ="    anjali     ";
console.log(stringOne);
console.log(stringOne.trim());  // it used remove the extra spaces

const url ="anjaliharsh@gmail.com";
console.log(url.replace('@', '268')); // it used to replace the character first we gave which character we wat to remove then with which value you want to remove 
console.log(url.includes('anjali')) // for checking is this value present it always return boolean value.

const stringTwo = "Hardwork-is-the-key-to-Success";
console.log(stringTwo.split('-')); // basically need separator for spliting that can be space also and it always return the array.









