


//EXAMPLE 1:
console.log("Start");
document.getElementById("btn")
.addEventListener("click",function(){
    console.log("Callback");
});

console.log("End");

/*

Global Execution Context is created and pushed into the call stack.

- Line 1: 
    JS calls the console Web API so that we log "Start" onto the console.

- Line 2/3/4: 
    JS calls the DOM API and an event listener is added.
    So , the callback func. is handed over to the Web API environment with a 'click' event.
    Whenever the button is clicked, a callback function with click event will be handed over to the web API env.

- Line 5: 
    JS calls the console Web API so that we log "End" onto the console.


Now, When the GEC is popped off the call stack is empty , then the callback functions will be moved to the callback queue and the event loop will push it one by one into the call stack for execution.    
*/




//EXAMPLE 2: (IMPORTANT)
console.log("Start");

setTimeout(function cbT(){
    console.log(" CB Timeout");
},5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Fetch");
});

//1000 lines of code
console.log("End");





/* 
Global Execution Context is created and pushed into the call stack.
Here , we have two asynchronous functions.(setTimeout/fetch())

- setTimeout()
    Callback function cbT() attached with the setTimeout() is handed over to the Web API Environment and a timer of 5000ms is set.

-fetch()
    When the fetch() completes executing and fetches data from the server ,i.e promise is resolved then the callback function cbF()is also sent to the  Web API Environment .

Both the callback functions are handed over to the Web API.
These callback functions are only executed when the call stack is empty.Now, GEC is in the call stack.
Line by line (1000 lines) , code will be executed and 'end' is printed.
After the end of program, the asynchronous tasks are computed. 
*/




/*
QUESTIONS:

Q1. Suppose fetch() takes less than 5000ms to get the data from server, then will cbT() execute before cbF()?

Q2. If timer of 5000ms ends before the end of program and the setTimeout() is ready to execute, will JS print Start -> CB Timeout -> End?

Q3. Will fetch() be a part of the Callback Queue?



ANSWERS: 

cbT() will be sent to the Callback Queue.
cbF() will be sent to the Microtask Queue. (high-priority tasks)

When the call stack is empty, the EVENT LOOP first checks the Microtask Queue for tasks to be executed. If the microtask queue is empty , then the tasks from callback queue are executed.



A1. Microtask Queue is executed first. So cbF() will be excuted before .

A2. The GEC stays in the call stack until the end of the program and until then the asynchronous task need to wait. So , even if the timer of 5000ms ends, it will wait until GEC is popped from call stack. JS will execute in a synchronous manneruntil the end.

A3. Callback functions attached with promises (fetch()) will be part of high-priority microtask queue.
*/