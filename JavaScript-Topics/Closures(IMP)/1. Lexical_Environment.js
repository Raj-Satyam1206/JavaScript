function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();
console.log(b);


/*   LEXICAL ENVIRONMENT:
- Lexical means the relationship between functions and the surrounding code.
- Lexical environment/scope is the scope in which a function is defined.(for inner function, "outer" function becomes the lexical scope)

- When a new execution context (global/local) is defined, a new Lexical Environment is also created.

- Lexical environment is the local memory + lexical env of the parent (immediate outer scope).

- Here, function 'a' has a lexical env. of its own local memory along with the lexical env. of the global scope.
- Function 'c' has a lexical env of its own Local memory along with lexical env of 'a' forming a CLOSURE with function 'a' and also has the lexical env. of the global scope. 
*/ 






/* SCOPE CHAINING / LEXICAL SCOPING
- function 'c' does not have access to variable b. Due to the lexical env. of function 'c' , it accesses the variable 'b' from its outer lexical scope('a').

- If the value of a variable is not found in the function, JS looks for the variable in its immediate outer lexical scope. If it's not found there , then it looks for the variable in the global scope.

- JS allows a function to have access to a variable from its immediate outer lexical scope until it finds the value.
- This is known as Scope chaining/ Lexical scoping.
*/

1.
console.log(b);
var b = 10;
// OUTPUT: undefined (Hoisting)


2.
function a() {
    console.log(b);
}
var b = 10;
a();
// OUTPUT: 10 (Scope Chaining)