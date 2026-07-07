








/* An empty file is the SHORTEST JS PROGRAM.

- By default, JavaScript creates a global execution context for every program and also a global object i.e, WINDOW.

- Window object is a global object which contains functions and variables created by JavaScript Engine.

- A global object is created along with the global execution context.

- Javascript Engine also creates a this keyword.

- In global space, this refers to the global object, i.e this refers to window.

-    this === window (TRUE)

*/



var a = 10;
function x(){
    var b = 10;
}

console.log(window.a);
console.log(a);
console.log(this.a);


/* The variable 'a' is in global space but not 'b'. 



- In the global space, this refers to window object
- So all three console statements will give the same result.    
*/

