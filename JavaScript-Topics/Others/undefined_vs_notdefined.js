console.log(a);
var a = 7;

console.log(x);


/* UNDEFINED: 
- Undefined is a primitive data type in javascript.
- It means that a variable is declared but not assigned a value.

- Before the code is executed, variables and functions are allocated memory in the execution context. 
- The variables are allocated the value undefined.
- After a value is assigned to the variable, undefined changes to the value assigned.

- Undefined is like a placeholder given to the variable which stays with it until a value is assigned to the variable.

- UNDEFINED TAKES MEMORY SPACE.

- So, the first console statement will print undefined.



    NOT DEFINED:
- Not Defined means when the variable is used without first declaring the variable.('x')

- In the execution context, memory is not allocated to these variables. 
*/ 


var a;
a=10;
console.log(a);
a="Hello"
console.log(a);

/*  JS is a dynamically-typed language.
- It means that the data type of a variable is determined at runtime, not at compile time.
- The data type of a variable can change during the execution of the program.
*/ 





a = undefined;
// This will NOT throw an error but its not a good practice.
// Undefined is a type meant for a variable which has no value assigned. 



/*
console.log(null == undefined)  -- TRUE
console.log(null === undefined)  -- FALSE

type of undefined is undefined but type of null is Object.
*/