    const myArr =[0,1,3,"anjali",true] // array is collection of multiple items under single variable name
    console.log(myArr[3]);  //for accesing the value by giving index

    //methods of array//
    myArr.push("anjaliiiiii") //for adding the value in array
    console.log(myArr)

    myArr.pop() //for removing the value from array its basiccaly remove the last value
    console.log(myArr)

    myArr.unshift("meenakshiiii") //for adding the value at front
    console.log(myArr)

    myArr.shift() //for removing the value 
    console.log(myArr)

    console.log(myArr.includes(78)); // it tells whether the value is present or not
    console.log(myArr.indexOf(56));  // it tells the index but if we pass the value that is not present here will return negative results which also means that value not present here

    const newArr =myArr.join() // it will add the values of previous array into new one and changes its type into the string
    console.log(myArr)
    console.log(newArr) 
    console.log(typeof newArr)

const mynewArr =myArr.slice(0,3); //for returnig the sub array ad make chnages in the copy of array
const mynewArr1 =myArr.splice(0,3); // it make chnages in original arry

console.log(mynewArr1)
console.log(myArr)

let a =['a','b','c']
let b=a.join("+")
console.log(typeof b)

let alphabets =['a','b','c'];
let numbers =[1,2,4]
let afterAdding = alphabets.concat(numbers) //for addings to multiple array in one single
afterAdding=[...alphabets,...numbers] //another way of addings to multiple array in one single
console.log(afterAdding)

let flattingArr =[1,2,4,5,[6,7,8],[9],10,[11,12,13,14,15]]
 let afterFlatting =flattingArr.flat(Infinity) // it make one single aray if the array has nested arry in it
 console.log(afterFlatting)


let  makeNew  = Array.from("anjali");

console.log(makeNew)
console.log(makeNew.at(5))





    

