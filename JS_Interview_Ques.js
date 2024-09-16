
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

/*
Q. Will y() form a closure with a LET-declared variable?

A. y() will still form a closure with variable 'b' even if it is declared with LET keyword. let has a block scope.
*/

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

/* 
Q. Will y() form a closure with parameter 'b'?

A. Closure is formed by a function with its immediate outer lexical scope. Scope includes all the variables and even the parameters included. Hence, y() will form a closure with paramter 'b'. 
*/


//4.
function outest(){
function outer(b){

    function inner(){
        console.log(a , b); // REFERENCE of 'a'
    }
    let a = 10;
    return y;
}
}

let a=100;
var close = outest()("hello");
close();

/* So,here there is one more level of functions closure and inner function will form a closure even with the outest() lexical scope.

 Q. When we have 'let a= 100' in global scope, will inner() form a closure with 'a=10' or 'a=100' since it has the reference to 'a'?
 
 A. inner() will form a closure with 'a=10' since 'a=10' is in the immediate outer lexical scope. 'a=100' is a completely new variable in the global scope. 

 - if we remove 'a=10', only then it can form a closure with the 'a=100' in the global scope.
 - if we remove 'a=100' also, it will result in a reference error.
*/



/*5.

Q. How Data hiding/encapsulation is provided with closures?

A. Encapsulation is wrapping up of data(members/methods) inside a capsule so that any other function or other part of code cannot access it.

-If a variable is declared in the scope of a function, it can only be accessible within the function itself. 
*/

var counter = 0;

function counterIncrement() {
    counter++;
}

// Variable 'counter'  is in the global scope and can be accessed from anywhere.

function outer(){
    var counter = 0;

    function counterIncrement() {
    counter++;
    }
}
outer();
console.log( counter); //INVALID

// Now, we cannot access the variable 'counter'  from outside the function.


/* The only way now to access this variable 'counter' is through CLOSURES.
- inner function will form a closure with 'counter' and returned

- It means we cannot direcly access 'counter', we need to use CLOSURES to access the 'counter' variable.
*/

function outer(){
    var counter = 0;

    return function counterIncrement() {
    counter++;
    }
}
var close = outer();
console.log(close());
console.log(close());

var close2 = outer();
//if we call outer() again, it will be a completely new call and 'counter' will be 0 and a new closure will be formed.





//6.

/* 
    Q. Add a decrement function along with increment function, how can we closures then? 

    A. Two ways to do it::
    - return an object with two functions
        return {increment, decrement};

    - use Function constructor
        this.increment = function(){}
        this.decrement = function(){}    
*/


 //function Constructor / Constructor functions
function Outer(){
    var counter = 0;

    this.increment = function() {
    counter++;
    console.log(counter);
    }

    this.decrement = function() {
        counter--;
        console.log(counter);
    }
}

var counter1 = new Outer();
counter1.increment();
counter1.decrement();



//7.
/* 
    Q. DISADVANTAGES OF CLOSURES?
    
    A. Closures often lead to over-consumption of memory. Everytime a closure is formed, consumes a lot of memory because the variables are NOT garbage collected till the program expires.
    (function remembers its lexical scope even after execution).
    The variables are not destroyed even after function execution.
*/


//8.
/*
    Q. What is a Garbage Collector?

    A. Garbage Collector is a program in browser/JS Engine which basically free up unutilised memory space.(not-in-use variables)
    
    In programming languages such as C, C++ , Developers decide how to allocate /deallocate the memory. But in JS, there is a garbage collector which takes the unused variables out of the memory space.
    
    Those variables which are not in use in program are taken out from memory space.
*/

// 9.
/*  
    Q. Relation between Closures & Garbage Collector?

    A. The variable in the outer scope forms a closure with the inner function. 
    - Ideally after the outer function has returned, its variables will be destroyed( will be garbage collected) and memory will be freed.
    - But with closure, even after execution, variable can be accessed from outside scope,i.e, function remembers its lexical scope (variables in the outer scope) and cannot be destroyed or garbage collected and it is saved in the memory.
*/

function outer(){
    var a = 10 , b = 20;
    return function inner(){
        console.log(a); // REFERENCE of 'a'
    }
}
var z = outer();
z();

/* So, in this both variables 'a' and 'b' are forming a closure with the inner().
   After the outer() is executed and returned,  'b' will be garbage collected and not 'a' because 'b' is unused variable so it's memory space can be freed.
*/ 
