const name = "Suraj"

const repoCount = 50

// console.log(name + repoCount + "Value")                     // Suraj50Value


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)        // Hello my name is Suraj and my repo count is 50

const gameName = new String("Suraj")
// console.log(gameName)                                       // [String: 'Suraj']

// console.log(gameName[0])                                    // S
// console.log(gameName.__proto__)                             // {}

// console.log(gameName.length)                                    // 5

// console.log(gameName.toUpperCase())                             // SURAJ

// console.log(gameName.charAt(2))                                 // r

// console.log(gameName.indexOf('r'))                              // 2

const newString = gameName.substring(1,4)
// console.log(newString)                                          // ura

const anotherString = gameName.slice(-4, 4)
// console.log(anotherString)                                      // ura


const newStringOne = "   Suraj   "
// console.log(newStringOne)                                       //    Suraj   
// console.log(newStringOne.trim())                                // Suraj


const url = "https://suraj.com/suraj%20Patel"
// console.log(url.replace('%20', '-'))                            // https://suraj.com/suraj-Patel

// console.log(url.includes('suraj'))                              // true


const newStr = new String("suraj-kumar-patel")
console.log(newStr.split('-'))                                  // [ 'suraj', 'kumar', 'patel' ]



