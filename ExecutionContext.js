var n = 2;
function square (num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);


/*  # Execution Context:

Execution Context is like a container which holds information related to the current state of code being executed. 

It means that all the variables , functions and other parameters which is being used currently in the code is stored in a container called as execution context.

Two components of Execution Context
1. Variable Environment
- stores the variables , functions and othger parameters used in the code.

2. Thread of Execution
- Line by line, the code is executed an dthe values are allocated to the variables.

Two phases of Executioon context:
1. Creation Phase
- this is the memory creation phase
- Even before the code is executed, just after writing the code, Memory is allocated to each variable and function is the global scope.
- Variables are allocated with undefined and the functions are allocated with a copy of the function. 

2. Execution Phase
- this is the code execution phase
- Code is executed line by line and the values are allocated to the variables.




- First , the global execution context is created and the varibales and functions are allocated memory.

- When a function is invoked, a new local execution context is created which has its own components.

- When a function returns a value, the execution context is deleted and value is assigned to a variable removing the value undefined. 
*/
