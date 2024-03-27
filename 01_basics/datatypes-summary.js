// Premitive

// 7-types :- String, Number, Boolean, NULL, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outSideTemp = null

let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)                               // false


const BigNumber = 346820093194498319389n


// Reference (Non premitive)

// Array, Object, Function

const heros = ["Saktiman", "naagraj", "doga"]

let myObj = {
    name : "Suarj",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}



// console.log(typeof id)                              // symbol


// console.log(typeof heros)                           // object

// console.log(typeof myObj)                           // object

// console.log(typeof myFunction)                      // function








// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (premitive),        Heap (Non premitive)

let myName = "Suraj"

let anotherName = myName
anotherName = "Patel"

// console.log(myName)                                 // Suraj
// console.log(anotherName)                            // Patel





let userOne = {
    email : "suraj@google.com",
    upi : "suraj@ybl"
}

let userTwo = userOne

userTwo.email = "patel@gmail.com"

console.log(userOne.email)                              // patel@gmail.com
console.log(userTwo.email)                              // patel@gmail.com


