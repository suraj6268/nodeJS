// singleton
// Object.create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Suraj",
    "full name" : "Suarj Patel",
    [mySym] : "mykey1",                     // -----> symbol ka use hua hai
    age : 18,
    locatin : "Indore",
    email : "suraj@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.name)                    // Suraj
// console.log(jsUser["name"])                 // Suraj
// console.log(jsUser["full name"])            // Suraj Patel
// console.log(jsUser[mySym])                  // mykey1


jsUser.email = "Suarj@chatgpt.com"

// Object.freeze(jsUser)                       // ------> ab kuch bhi change reflact nhi karega

jsUser.email = "Suarj@microsoft.com"

// console.log(jsUser)                         // object ka pura data print kar dega



jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(jsUser.greeting())                  // Hello JS user
console.log(jsUser.greetingTwo())               // Hello JS user Suraj

