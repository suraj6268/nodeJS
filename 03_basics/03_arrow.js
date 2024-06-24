const user = {
    username : "Suraj",
    prices : 999,

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}

// user.welcomeMassage();                  // Suraj, welcome to website
                                        // {
                                        // username: 'Suraj',
                                        // prices: 999,
                                        // welcomeMassage: [Function: welcomeMassage]
                                        // }


user.username = "sam";
// user.welcomeMassage()                   // sam, welcome to website
                                        // {
                                        // username: 'sam',
                                        // prices: 999,
                                        // welcomeMassage: [Function: welcomeMassage]
                                        // }

//console.log(this)                               // {}




// function ke ander this kam nhi karta hai 

// function chai()
// {
//     let username = "Suraj"
//     console.log(this.username)
//     console.log(this) 
// }

// chai()                                      // undefined



// const chai = function()
// {
//     let username = "Suraj"
//     console.log(this.username)
//     console.log(this) 
// }

// chai()                                      // undefined





// const chai =() => {
//     let username = "Suraj"
//     console.log(this.username)              // undefined
//     console.log(this)                       // {}
// }

// chai()                                      







// const addTwo = (nums1, nums2) => {
//     return nums1 + nums2;
// }

// console.log(addTwo(3, 4))                            // 7




// const addTwo = (nums1, nums2) =>  nums1 + nums2

// console.log(addTwo(3, 4))                               // 7




// const addTwo = (nums1, nums2) =>  (nums1 + nums2)

// console.log(addTwo(3, 4))                               // 7




const fun = () => ({username : "Suraj"})

console.log(fun())                                         // { username: 'Suraj' }



