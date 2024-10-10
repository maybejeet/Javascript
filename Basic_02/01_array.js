// array

const num = [1,2,3,4,5]
const myArr = new Array (1,2,3,4,4,"jeet")
//console.log(num[2]);
//console.log(myArr[5]);

myArr.push("kumar")
myArr.push(100)
//console.log(myArr);

myArr.pop()
//console.log(myArr);

myArr.unshift("Hello") //first me add
//console.log(myArr);
myArr.shift() //first se remove
//console.log(myArr);

//console.log(myArr.includes("prasad"))
//console.log(myArr.indexOf("prasad"))
//console.log(myArr.includes("jeet"))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(newArr.replaceAll(',',' - '));

const ar1 = [0,1,2,3,4,5,6,7,8,9,10]
const myar1 = ar1.slice(1,3) //original array doesnot change in slice
console.log(ar1)
console.log(myar1)

const myar2 = ar1.splice(1,3) //original array changes in splice
//console.log("B",ar1)
console.log(myar2)
console.log(ar1)





 
