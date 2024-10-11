//singleton , create , obj literals , keys , values , access values , use symbol as a key [Sym] , Object.freeze(..) 
//function(){...} , reference ${this.name}  

const mysym = Symbol("key1")

const User = {
    name: "Jeet",
    age: 20,
    email: "jeet@xyz.com",
    isLoggedIn: false,
   // mysym: "HelLo Symbol".  not corrent way to use symbol
   [mysym]: "helloSymbol" //[] for symbols
}

//testing symbol
// console.log(User.mysym);
// console.log(typeof User.mysym);   symbols cant be accessed this way

// console.log(User[mysym]);
// console.log(typeof User[mysym]);


// const myUser=Object.create(User) //new obj also inherits the property of other obj
// myUser.Fullname="jeet Kuamr prasad"
// console.log(User.name);
// console.log(myUser.name);
// console.log(myUser["Fullname"]);
//console.log(User);

User.greeting = function(){
    console.log(`Hello ${this.name}, Your age is ${this.age} `); // this keyword
    
}
console.log(User.greeting());



