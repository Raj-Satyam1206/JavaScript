/* CLOSURES

- Closure is a function bundled together with its lexical environment/scope.
- Closure is created when a function is defined inside another function.
- All Javascript functions are closures because they automatically remember the scope in which they were created.

 Yes, closures are typically created when a function is defined inside another function because this is when the inner function "captures" or "closes over" variables from its outer function's scope. The defining feature of a closure is the ability of the inner function to access variables from the outer function even after the outer function has finished execution.


- Even when the function is executed, a function remembers its lexical scope. It does not destroy the variables in its environment.
*/


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
// creating a closure
var z = x();
z(); // outputs 7


/*
- lINE 19; 
- y() is returned from x(); hence the execution context of x() is deleted but even after x() has finished execution, z() still has access to the variable a
- This is because y() is a closure and it has access to the variables in its lexical scope.(outer scope of x())

- While returning y, not just the function was returned, but  a closure was returned which enclosed its lexical scope.

***
 - With the closure, the REFERENCE/ ADDRESS of the variables is  returned and not the VALUE of variables.
*/



function x(){
    var a=7;
    function y(){
        console.log(a); // REFERENCE of 'a'
    }
    a=100;
    return y;
}
// creating a closure
var z = x();
z();



/* IMPORTANT 
- Here the closure is returned to z(), and z() remembers the REFERENCE to variable 'a'(ADDRESS of 'a') and NOT the VALUE of 'a'.

When z() is called, it consoles the value present in the memory space of 'a'. 

It should be 7, coz at the time of the function def. a's value is 7.
WRONG.

With the closure(function), the reference of 'a' is returned. 
It remembers the reference of 'a', and when z() invokes, 100 is present in the memeory space of variable'a'. So, it prints 100.
*/


//OUTPUT QUESTIONS

//1. 
function x(){
    // var a=7;
    function y(){
        console.log(a); // REFERENCE of 'a'
    }
    var a = 100;
    return y;
}
x()();

// y() will still form a closure with variable a as 'a' is still in the outer lexical scope of y(). It does not matter in which sequence it is written.


//2.
function x(){
    // var a=7;
    function y(){
        console.log(a); // REFERENCE of 'a'
    }
    // var a = 100;
    let b = 10;
    return y;
}
x()();

// y() will still form a closure with variable 'b' even if it is declared with LET keyword. let has a block scope.


//3.
function x(b){

    function y(){
        console.log(a , b); // REFERENCE of 'a'
    }

    let a = 10;
    return y;
}
var z = x("hello");
z();

// Closure is formed by a function with its immediate outer lexical scope. Scope includes all the variables and even the parameters included. Hence, y() will form a closure with paramter 'b'. 
