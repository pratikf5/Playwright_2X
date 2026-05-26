//add or Remove
let arr = [1,3,4,5,6]
arr.pop(3)
console.log(arr)
arr.push(3,4)
console.log(arr)

//arr.unshift  () //inserts new element in the begineeing 
//arr.shift   ..shift will remove the first element
//splice()  Replace and deleted element 

// arr.splice(2, 1);
// console.log(arr);

arr.splice(2,0,99)  //on the index 2 do not dlete add the element 
console.log(arr)