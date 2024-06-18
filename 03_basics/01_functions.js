
function myName() {
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
}

// myName()

                        // parameters(jab function ki deffinition banate hai )
function addTwoNumbers(number1, number2) {

    console.log(number1 + number2);

}

            // arguments(calling time me jo pass kiya jata hai)
// addTwoNumbers(3, 4);                                // 7
// addTwoNumbers(3, "a");                              // 3a
// addTwoNumbers(3, null);                             // 3


function add(number1, number2){

    return number1 + number2;

}

const result = add(3 , 5);
// console.log("result : ", result);                    // 8


function loginUserMassage(username) {

    if(username === undefined){
        console.log("Please enter a username");
        return ;
    }

    return `${username} justed loged In`
}

// console.log(loginUserMassage("suraj"))                  // suraj justed loged In
// console.log(loginUserMassage())                         // Please enter a username
//                                                         // undefined




// Rest operator (it will always last parameter)
function calculateCardPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCardPrice(200, 300, 400, 2000));           // [ 400, 2000 ]




// object pass in function 

const user = {
    username : "Suraj",
    price : 699
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);                     // Username is Suraj and price is 699

// handleObject({
//     username : "Patel",
//     price : 499
// })                                      // Username is Patel and price is 499





const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));         // 400

console.log(returnSecondValue([300, 100, 500]));    // 100


