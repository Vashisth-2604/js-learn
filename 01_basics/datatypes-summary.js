// primitive

// 7 Types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score=100
const scorevalue=100.3

const isloggedIn = false
const outsidetemp = null;
let userEmail;

const Id =  Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId)

//const bigNumber= 3564478838378383n


// Reference Type(Non-primitive)

//Array,Objects,Functions

const heros =["Shaktiman","Naagraj","doga"];

let myobj ={
    name:"Abhishek",
    age: 22, 
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp)

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++


//Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "abhishekvashisth.com"
  

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userone ={
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userone

userTwo.email = "abhishek@google.com"

console.log(userone.email);
console.log(userTwo.email);