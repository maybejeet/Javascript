// Primitive
// 7types: String, Number, Boolean, null, undefined, Symbol(Kisi bhi value ko unique banane ke liye), BigInt

// const Id = Symbol('123')
// const Id2 = Symbol('123')
// console.log(Id == Id2); //Symbol() me same value dalne se bhi Id and Id2 ka value same nhi
// console.log(typeof Id); //type:symbol


// Reference (Non primitive)
// Arrays, Objects, Functions

// const friends=["Neha","Shreya","Saloni","Ayush","Anand","Aishika"]
// console.log(friends);
// console.log(typeof friends);


// let myObject = {
//     name : "Jeet",
//     roll : 11900123063,
//     age : 20,
// }
// console.log(myObjec);
// console.log(typeof myObject);


// const myFunction = function(){
//     console.log("Hello World");
    
// }

// myFunction()
// console.log(typeof myFunction);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Stack(primitive), heap(Non primitive)
// Stack me memory ka ek copy milta h
// Heap me wahi memoery ka reference milta h

a=24
b=a
b=5
console.log(a);
console.log(b);

let Obj1 = {
    name: "Jeet",
    age: 20
}
let Obj2 = Obj1
Obj2.name = "Jeet KUmar Prasad"
console.log(Obj1.name);
console.log(Obj2.name);





