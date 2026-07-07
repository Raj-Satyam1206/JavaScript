/* Event Propagation
    - how the events are propagated through the DOM tree
    - event capturing and bubbling
    - First the capturing phase happens & then events are bubbled up
*/
//index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>

// </head>
// <body>

//     <div id="grandparent">
//         <div id="parent">
//             <div id="child">

//             </div>
//         </div>
//     </div>

//     <script src ="index.js"></script>
// </body>
// </html>



//index.js

// 1. Bubbling Phase
document.getElementById("grandparent")
.addEventListener("click" , ()=>{
    console.log("Grandparent clicked");
});

document.getElementById("parent")
.addEventListener("click" , ()=>{
    console.log("Parent clicked");
});

document.getElementById("Child")
.addEventListener("click" , ()=>{
    console.log("Child clicked");
});

/* OUTPUT (when Child element is clicked = Target Element):
Child Clicked
Parent Clicked
Grandparent Clicked
*/


// 2. Bubbling Phase
document.getElementById("grandparent")
.addEventListener("click" , ()=>{
    console.log("Grandparent clicked");
}, false);

document.getElementById("parent")
.addEventListener("click" , ()=>{
    console.log("Parent clicked");
}, false);

document.getElementById("Child")
.addEventListener("click" , ()=>{
    console.log("Child clicked");
}, false);

// "False" attribute in capturing phase = Bubbling Phase
/* OUTPUT (when Child element is clicked = Target Element):
Child Clicked
Parent Clicked
Grandparent Clicked
*/



// 3. Capturing Phase
document.getElementById("grandparent")
.addEventListener("click" , ()=>{
    console.log("Grandparent clicked");
}, true);

document.getElementById("parent")
.addEventListener("click" , ()=>{
    console.log("Parent clicked");
}, true);

document.getElementById("Child")
.addEventListener("click" , ()=>{
    console.log("Child clicked");
}, true);

/* OUTPUT (when Child element is clicked = Target Element):
Grandparent Clicked
Parent Clicked
Child Clicked
*/

/* OUTPUT (when Parent element is clicked = Target Element):
Grandparent Clicked
Parent Clicked
*/


// 4. Capturing Phase and Bubbling Phase
document.getElementById("grandparent")
.addEventListener("click" , ()=>{
    console.log("Grandparent clicked");
}, true);//capturing phase

document.getElementById("parent")
.addEventListener("click" , ()=>{
    console.log("Parent clicked");
}, false);//bubbling phase

document.getElementById("Child")
.addEventListener("click" , ()=>{
    console.log("Child clicked");
}, true);//capturing phase


/*
First the capturing phase happens and then bubbling phase

OUTPUT (when Child element is clicked = Target Element):
Grandparent Clicked
Child Clicked
Parent Clicked
*/

// To stop the propagataion use event.stopPropagation()