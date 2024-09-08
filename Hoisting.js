getName();
console.log(x);
console.log(getName);

var x = 7;

function getName(){
    console.log("JavaScript!!");
}


var getName = () =>{
    console.log("JavaScript!!");
}

var getName = function () {
    console.log("JavaScript!!");
}


/*  # Hoisting 
HOISTING is a behaviour in JavaScript in which the variable and function declarations are relocated to the top of the code blocks no matter where they are declared in the code. 

- It means that we can access these variables before declaration
- console.log(x);
  var x = 5;
  
- Only declarations are hoisted and not the value
- Hoisting only occurs with var declared variables

PRACTICAL IMPLEMENTATION OF HOISTING

- works on the concept of execution context
- Even before the code is executed, variables and functions are allocated memory (memory creation phase)
- So, when we access the variable/function before declaring it, it will show undefined for the variable and function body for the function. 
- happens due to memory creation phase in the execution context.


TRADITIONAL / ARROW FUNCTION :
- getName in the arrow function is the variable and undefined will be assigned to it if accessed before declaration.
- Similarly, in the nameless function expression also , getName is a variable to which the function is assigned.

*/