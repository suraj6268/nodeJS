// Immediately Invoked function expression (IFFE)


// Named IIFE
(function chai(){
    console.log(`DB Connected`)
}) ();                   // ------> yaha ; jaruri hai kiyuki 
// jab ek IIFE function ke baad dusra IIFE function likhte hai to ; lagana padega



(() => {
    console.log(`DB Two Connected`)
}) ();


((name) => {
    console.log(`DB Two Connected ${name}`)
}) ("suraj")

