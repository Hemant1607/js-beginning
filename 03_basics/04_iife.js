//Immediately invoked funcxtion expression (IIFE)

(function chai(){
    //Named IIFE
    console.log("DB Connected");
})();

//IIFE is used to avoid global scope pollution of variables.


//Another way

( (name) => {
    //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Hemant');

