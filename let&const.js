console.log(a);
console.log(b);

let a = 10;
var b = 100;


/*  HOISTING/TEMPORAL DEAD ZONE IN LET & CONST


- let & const are also hoisted.
- Hoisting is not just accessing the variables before initialization, but it's the allocation of memory even before a single line of code is executed.

- Even before any execution , w.r.t execution context, memory is allocated to variables 'a' and 'b'. It means that let variables are also hoisted.  

- Difference is that for variables declared with 'var' , they are allocated memory and initialized undefined in the GLOBAL OBJECT(Window). 

  For let/const, memory is allocated and initialized undefined in some other memory space.
  
- This memory space cannot be accessed until it is initialized. 
- This variable is in a Temporal Dead Zone(TDZ) and cannot be accessed . 

Therefore, accessing variable 'a' before initialization gives Reference Error. Variables cannot be accesed in the Temporal Dead Zone.


- TDZ is the time between the variable is hoisted(allocated memory) to the time it is initialized a value. 

- To AVOID TDZ , always put declarations/ initializations at the top of code/ scope.
*/


let x;
const y =10;


a=10;
//b=100;

console.log(a);
console.log(b);


/* Let & Const

- Variables declared with 'let' can be initialized later in code
- Variables declared with 'const' cannot be initialized later in code. It has to be initialized while declaration.
*/



/** ERRORS 
 * Reference ERROR -When we try to find a variable in th ememory space but cannot access it or which is not present in memory space.
 *  Syntax ERROR - When we try to write a code which is not syntactically correct.
 *  Type ERROR - When we try to assign a value of wrong data type to a variable.
*/


/**  LET & CONST & VAR 
 * Let - block scoped variables
 * Var - function scoped variables
*/