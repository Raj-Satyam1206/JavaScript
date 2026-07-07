// EVENT DELEGATION
/*
Q. What is Event Delegation?
    - Event delegation is a technique in JavaScript 
    where you attach a single event listener to the parent element, 
    rather than attaching individual event listeners to each child element

    - It is a case of Event bubbling, where events bubble up from the child elements to the parent element.

    - This parent listener then handles events that bubble up from its descendants

    - Events are managed more efficiently and dynamically

    - Within the event handler, we check the "target" property of the event object(e) to determine which child element actually triggered the event.
*/




//index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
// </head>
// <body>

// <div>
//     <ul id="category">
//         <li id="laptops">laptops</li>
//         <li id="cameras">cameras</li>
//         <li id="shoes">shoes</li>
//         //..
//         //..
//         //..
//     </ul>
// </div>

// <script src="index.js"></script>
    
// </body>
// </html>


//index.js
document.getElementById("category")
.addEventListener("click" , (e)=>{
    //console.log(e);
    console.log(e.target.id);
    window.location.href = "/" + e.target.id; 
});