const myDate = new Date()
//console.log(typeof myDate)

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

let myCreatedDate = new Date(2023,1,24,15,3)
//let myCreatedDate = new Date("2,24,2023")
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) //now easy to compares time **Always compare in mili seconds
// console.log(Math.floor(myTimeStamp/1000)) //to convert in seconds

const newDate = new Date()
newDate.toLocaleString('default',{
    weekday: "long",
    
})
console.log(`Today's date and time is ${newDate.toLocaleString()}`)