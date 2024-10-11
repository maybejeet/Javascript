//declaration(singleton and nonsingleton) , nesting obj ,  ? , merging obj , .assign target source , spread operator... , 
// objects in array , Object.keys(obj) , .hasOwnProperty 

//const newUser = new Object()
const newUser = {}
//console.log(newUser);

newUser.id = "123abc"
newUser.email = "jeet@goolge.com"
newUser.isLoggeedIn = false
//console.log(newUser);

const User={
    name:{
        fullname:{
            firstname: "Jeet",
            middlename: "Kumar",
            lastname: "Prasad"

        }
    }
}
//console.log(User.name.fullname.middlename);

const obj1 = {1:'A',2:'B'}
const obj2 = {2:'AB',3:'C'}
//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign(obj1,obj2) //Writing like this changes obj1 as Objecr.assign(target,source)... target me sab value chala jata h
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1 , ...obj2} //spread operator
// console.log(obj3);
// console.log(obj4);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));

console.log(Object.hasOwn(newUser, "email"));
console.log(Object.hasOwn(newUser, "age"));








