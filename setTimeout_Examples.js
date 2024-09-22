

// CONCURRENCY MODEL IN JS

console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");
//millions lines of code(takes 10 seconds to execute)


/* 
Q. What is Concurrency Model in JS?

A.  With start of program, Global execution context is created and pushed onto the call stack.
    setTimeout registers the callback function with a timer of 5s
    But will it execute after 5s?

    No.
    After the timer ends, the callback func. is pushed to the callback queue and ready to be executed.
    But it cannot be pushed to the call stack until the call stack becomes empty.

    The call stack will become empty when the entire program is executed(after 10s).
    So even if the callback func. is ready to be executed after 5s, it cannot execute until 10s. 

    After entire program ends, GEC pops out from call stack then the event loop pushes the callback function from callback queue into the call stack.

    This is Concurrency Model.

*/





console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

// code which will take 10 seconds

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000)
{
    endDate = new Date().getTime();
}
console.log("While Expires");


/*  
- 'Start' and 'End' will be logged into the console.
- Then while lopp run for 10 seconds and by then timer of 5s for serTimeout expires and ready to be executed.
-  First, with the GEC in call stack, 'While Expires' will be logged
and then immediately the callback function will be executed.
*/




// The callback functions in the callback queue or microtask queue will only be executed after the entire program has been executed synchronously and GEC is popped out from call stack. Thern the asynchronous tasks will be executed.






console.log("Start");

setTimeout(function(){
    console.log("Callback");
},0);

console.log("End");

/*  OUTPUT:
Start
End
Callback


- Even if the timer is 0s, it does not mean it will be immediately executed. It is still an asynchronous task and will be moved to the callback queue and will wait until the entire program ends.

USES OF Putting 0seconds:-
When we want that code to be executed later and not synchronously, then we can put a timer of 0s, so that it willmove to callback queue and wait until the program ends.
*/