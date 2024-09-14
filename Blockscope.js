{
    //Compound Statements
    var a= 10;
    console.log(a);
}


/* What is a block? 

- Anything within the curly braces {} is termed a block.
-When we have to write multiple statements into a group, we enclose it within a block{}.

 What is a scope?

- Scope is the accessibility of variables/ functions in the code.
*/


{
    var a=10;
    let b=10;
    const c=10;
    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a);
    console.log(b);
    console.log(c);

/** BLOCK SCOPE
 - Let and const are block scoped.
 - Variables declared with let and const are not accessible outside the block.
 */


 var a=100;
 {
    var a=10;
    console.log(a); // 10
 }
 console.log(a);    // 10

/* With VAR, when we declare 'a' inside the block, we modify the same memory space. 
So, Both will print modified value in memory space  = 10 
*/ 

let a=100;   // Script(memory space other than global)
 {
    let a=10;  // BLOCK SCOPE
    console.log(a); // 10
 }
 console.log(a);

/* With LET, when we declare 'a' inside the block, that is a different memory space(block-scoped). 
So, 10 gets printed inside the block  , 100 gets printed outside the block. 
*/  



// INVALID 
// This shows that 'a' has already been declared.
let a = 20;
{
    var a = 20;
    // VAR has a function-scope , so inside the block, it can have access to the variables in the global scope. 
    // So variable 'a' inside the block coincides the memory space of variable 'a' declared with let. 
}


// VALID
let a = 20;
{
    let a = 20;
}

// VALID
var a= 20;
{
    let a = 20;
}

