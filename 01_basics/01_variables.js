const accoutId = 144632                 // constant declaretion
let accountEmail = "suraj@google.com"   // variable declaraion
var accountPassword = "12345"           // variable declaration
accountCity = "Jaipur"
let accountState ;

// accoutId = 87334     // Const variable ko change nhi akr sakte hai
accountEmail = "hc@hc.com"
accountPassword = "2121211"
accountCity = "Rewa"

// console.log(accoutId)

console.table([accoutId, accountEmail, accountPassword, accountCity, accountState])

/*
note :- prefer not use to var
because of issue in block scope and functional scope 
*/



/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 144632      │
│ 1       │ 'hc@hc.com' │
│ 2       │ '2121211'   │
│ 3       │ 'Rewa'      │
│ 4       │ undefined   │
└─────────┴─────────────┘

*/
