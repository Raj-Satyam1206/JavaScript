/*   USES OF CLOSURES
Closures are a powerful and flexible feature in JavaScript that allow functions to access variables from their outer scope even after the outer function has returned.
*/


// 1. Data Privacy and Encapsulation

function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

/* 
- Closures are often used to create private variables or methods that cannot be accessed from outside a function, simulating the concept of encapsulation. 
- Here, count is a private variable that can only be accessed and modified by the inner function. This technique is used to hide implementation details and protect data.
*/




// 2.  Maintaining State in Asynchronous Functions



function delayedGreeting(name) {
    setTimeout(function() {
        console.log("Hello, " + name); // `name` is captured by the closure
    }, 1000);
}

delayedGreeting("Alice"); // Output after 1 second: "Hello, Alice"


/* 
- Closures are commonly used in asynchronous code, such as callbacks or promises, to maintain access to variables that exist at the time of function definition.
- In this example, the inner function inside setTimeout forms a closure and remembers the value of name even after delayedGreeting has finished executing.
*/


// 3. Event Handlers and Callbacks

function attachEventListener() {
    let count = 0;

    document.addEventListener('click', function() {
        count++;
        console.log(`Button clicked ${count} times`);
    });
}

attachEventListener();


/* 
- Closures are widely used in event handlers and callback functions where it's necessary to capture and use the context from an outer function.
- In this case, the event listener forms a closure over count and maintains its value across multiple clicks.
*/

// 4. Function Currying

function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8


/* 
- Currying is a technique where a function is transformed into a series of nested functions, each taking a single argument. Closures enable currying by preserving the arguments in the outer function.
- Here, add(5) creates a closure over a and returns a function that adds b to the preserved value of a. 
*/
