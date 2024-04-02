//  array

const myArr = [0, 1, 2, 6, 4, 5]

const myHeros = ["Saktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2])

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// unshift :- insert in starting ans shift all index values 

// myArr.unshift(9)

// shif :- first value remove kar deta hai 

// myArr.shift()

// console.log(myArr.includes(9))

// console.log(myArr.indexOf(3))

// const newArr = myArr.join()         // --------> convert array to string

// console.log(myArr)

// console.log(typeof newArr)
// console.log(newArr)


// slice, splice 

// slice :- original array me change nhi karta hai
// splice :- original array me change kar deta hai

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)

console.log(myn2)
console.log("C", myArr)
