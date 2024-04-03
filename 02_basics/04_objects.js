// const tinderUSer = new Object()              // ----> singleton object

const tinderUSer = {}                       // -----> non singleton object

tinderUSer.id = "123abc"
tinderUSer.name = "sunny"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer)              // { id: '123abc', name: 'sunny', isLoggedIn: false }


const regularUser = {
    email : "some@gmail.com",
    username : {
        userfullname : {
            firstname : "Suarj",
            lastnMame : "Patel"
        }
    }
}

// console.log(regularUser.username.userfullname.firstname)            // Suarj


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "e", 6 : "f"}

// const obj3 = {obj1, obj2, obj4}          // object ke ander object banege

// const obj3 = Object.assign({}, obj1, obj2, obj4)        // {} lagao ya nhi , {} insure karta hai in return object hi hoga

const obj3 = {...obj1, ...obj2, ...obj4}            // spred operater

// console.log(obj3)



const user = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    }

]

console.log(user[1].email)               // ---> way to acces data




console.log(tinderUSer)                                 // { id: '123abc', name: 'sunny', isLoggedIn: false }
console.log(Object.keys(tinderUSer))                    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUSer))                  // [ '123abc', 'sunny', false ]
console.log(Object.entries(tinderUSer))                 // [ [ 'id', '123abc' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]

console.log(tinderUSer.hasOwnProperty('isLoogedIn'))    // false


