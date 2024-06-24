
var c = 300;
let a = 100;
if(true)
{
    let a = 10;
    const b = 20;
    c = 30;

    // console.log("Inner : ", a)          //Inner :  10
}

// console.log(a);                  // 100
// console.log(b);                  // error
// console.log(c);                     // 30







function one()
{
    const username = "Suraj";

    function two()
    {
        const website = "Youtube";
        // console.log(username);              // Suraj
    }

    // console.log(website);            // error

    two();
}

one();




// +++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++

// console.log(addone(5))              // 6

function addone(num){
    return num+1;
}



// console.log(addtwo(5))              // error (Kiyuki yaha hamne addtwo ko ek const name ke variable me store kiya hai)

const addtwo = function(num){
    return num+2;
}



