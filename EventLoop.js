/* EVENT LOOP

- What is Event Loop? 
    - Event loop is a program in JS,  used to manage the execution order of asynchronous functions.
    - It manages the order in which the asynchronous tasks will be executed. 
    - It connects the callback queue, microtask queue to the call stack and manages which asynchronous task will be executed when.
*/




/*  WEB API 

Q. Is setTimeout() a part of JS?
A. No, setTimeout() is a part of Web API. 

Q. Is console / fetch() a part of JS?
A. No, console / fetch() is also a part of Web API.

- When we use console.log() , it actually calls console Web API which gives us access to log into the console of the browser.

- Web APIs are used in our code through the GLOBAL object (window)

    -window.console
    -window.setTimeout()



Q. What is a Web API?
    - Web API is a set of APIs that are used to interact with the browser and the DOM.
    - Web API helps to access and interact with the web-based services.
    - Two types
        -Browser API
        -Third-party API
    
- setTimeout()
- console
- DOM API

        All these are WEB APIs that are used in the code        
*/





/* 

Q. How code is run in JS synchronously / asynchronously? 

A.
- When the program starts , the Global execution context(GEC) is created  and pushed into the call stack and remains there until the program ends.
- So, code is run synchronously and line by line.
- If an asynchronous task comes up, it is handed over to the Web API environment. 
- When the call stack gets empty,i.e, GEC is popped out of call stack, ,i.e. program ends, then the event loop first takes callback functions from microtask queue and puts it into the call stack for execution.
- After all tasks in microtask queue is completed, then the event loop takes callback functions from the callback queue and puts it into call stack one by one for execution.
- Hence, after entire program is run line by line (synchronously) , then the asynchronous tasks are completed by the event loop.
- This way Code is run synchronously & asynchronously.   
*/





/*
Q. Are Callback and Microtask Queue same?

A. 
NO, Microtask Queue contains high priority tasks like the callback functions attached with promises, fetch().

Callback Queue contains every other callback functions.


- Callback functions in asynchronous tasks are first handed over to the Web API environment.
- After the timer ends, callback functions are sent to the callback queue.
- Callback functions attached with promises are sent to the Microtask queue.
*/


/* 

Q. Why do we need a callback queue?
A. The Event loop cannot directly take the callback function from the Web API environment.
    Suppose there are multiple callback functions, so there needs to be an order in which they are executed.
 */


