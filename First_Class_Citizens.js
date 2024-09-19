/* FIRST CLASS CITIZENS OF JS

- Functions are treated as first-class-citizens in JavaScript.
- This is because :
    - they can act as arguments to other functions. (Callback)
    - they can be returned by other functions. (Closures)
    - they can act as value to a variable. (Func. Expression)

*/
    


a();
b(); //This will be error.




// FUNCTION STATEMENT / FUNCTION DECLARATION
// A function statement is defining a function with function keyword and function name and a body.
function a (){
    console.log("Hello");
}

// FUNCTION EXPRESSION
// A function expression is assigning the function as a value to a variable. 

var b = function (){
    console.log("Hello");
}

/* DIFFERENCE b/w Func. Statement  &  Func. Expression 

    - Major difference is HOISTING.
    - The way they are hoisted 
    - Due to Hoising, memory will be allocated before any code execution.
    - 'a' will act like a function and initially have the function body as a value. 
    - 'b' will act like a variable and initially have undefined as a value.
    - When line 28 executes, Only then 'b' will behave like a function.
    - So when b() is called at first, it will be a variable and not a function, hence ; Type Error
*/


// ANONYMOUS FUNCTION
// An anonymous function is a function defined without a name.
// It is a type of Function Expression.


// NAMED FUNCTION EXPRESSION
// A named function expression is a function expression that has a name.

var b = function xyz(){
    console.log("Hello");
    //xyz(); -  Hello
}

b(); 
xyz(); // ERROR: xyz is not defined

/* CORNER CASE:
- function cannot have two global names 'b' and 'xyz'
- Here, 'xyz' is not created in the global scope
- Since the function is a value, 'xyz' is local to the function and cannot be called outside the function.
*/



// PARAMETERS & ARGUMENTS
/*  Parameters are the variables defined in the function definition.
    Arguments are values passed to the function in function calling.
*/