let myDate = new Date()

// console.log(typeof myDate)                                  // object

// console.log(myDate)                                         // 2024-04-01T05:58:58.608Z
// console.log(myDate.toString())                              // Mon Apr 01 2024 11:28:58 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())                          // Mon Apr 01 2024
// console.log(myDate.toLocaleString())                        // 1/4/2024, 11:28:58 am
// console.log(myDate.toJSON())                                // 2024-04-01T05:58:58.608Z
// console.log(myDate.toLocaleTimeString())                    // 11:28:58 am


// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate)                                      // 
// console.log(myCreatedDate.toDateString())                       // 
// console.log(myCreatedDate.toLocaleString())                     // 



let myTimeStamp = Date.now()

// January 1, 1970 se abhi tak ka time milisec me dega 
// console.log(myTimeStamp)                                            //

// created time se abhi tak ka time milisec me dega
// console.log(myCreatedDate.getTime())                                //

// +++++++++++ in Seconds ++++++++++
// console.log(Math.floor(Date.now()/1000))                            // 


let newDate = new Date()

// console.log(newDate)                                                    //
// console.log(newDate.getMonth() + 1)                                     //
// console.log(newDate.getDay())                                           //

console.log(`${newDate.getDay()} and ....`)                             //



newDate.toLocaleString('default', {
    weekday : "long"
})

