/* CALLBACK FUNCTIONS
- Callback function is a function that is passed as an argument to another function and is executed later in response to an event or an asynchronous task.

- Due to callback functions , we can do asynchronous task in synchronous JS Language.

- It is called callback functions as it can be called later in the program. 
*/

setTimeout(function(){
    console.log("timer");
},5000);

//Here, func. is a callback function which is passed as an argument to setTimeout() method. It is executed after 5000ms , that brings asynchronous nature .

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});

// Here y() is a callback function. 
// Hence x() , y() will be executed and after timer of 5000ms ends, then the callback function in the setTimeout() will be executed.





/*  Blocking Behaviour

- The synchronous nature of JS often lead to blocking the call stack.
- Due to the synchronous nature, 'b' will be printed only after the alert window has closed. 
- That alert window will block further statements to execute.
*/

console.log("a");
alert("This will block the further statements to execute");
console.log("b");



/* EVENT LISTENERS

- Event listeners are actions/functions performed in reponse to an event.
- The callback functions attached with the 'click' event are event listeners.
- addEventListener() is a method which attaches the event listeners to the DOM element.
- So, everytime the button is clicked, the callback function moves towards the call stack to get executed.
*/


// INTERVIEW QUESTION
// Print the COUNT of button clicks everytime the button is clicked.

let count=0;
document.getElementById("clickMe").addEventListener("click" , function xyz(){
    console.log("Button clicked" , count);
});

/*

- Problem is that 'count' is a global variable here and can be accessed and manipulated.

- Here, Closures come into picture as closures lead to encapsulation and data hiding.
- Callback func. forms a closure with the 'count' variable.
*/

function close(){
    let count=0;
    document.getElementById("clickMe")
    .addEventListener("click" , function xyz(){
        console.log("Button clicked" , ++count);
    });
}
close();