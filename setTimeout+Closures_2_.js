// Print 1 after 1s, 2 after 2s, 3 after 3 s, 4 after 4 s, 5 after 5s
function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
}
}
x();

// It seems correct as value of 'i' is 1, then after 1s , 'i' will be printed.


/*OUTPUT:
6 (After 1s)
6 (After 2s)
6 (After 3s)
6 (After 4s)
6 (After 5s)
*/


/* FOUR IMPORTANT CONCEPTS:
- CLOSURES::
    - Callback function is forming a closure with the loop variable in the outer scope.

- SETTIMEOUT EXECUTION::
    - With each loop, a copy of the function is sent to the callback queue with timer attached and after the timer ends, the function is sent to the call stack to be executed.

- INCREMENTATION::
    - JS does not wait for the 1st timer to end and then loop variable will be incremented.
    - Instead, the loop variable keeps on incrementing as JS DOES NOT WAIT FOR ANYTHING.
    - It's not like after first timer of 1s, then the loop variable will be 2 and then after 2nd timer of 2s, loop variable be increment to 3.

    NO !!

    - JS DOES NOT wait for the timer, rather the loop variables are incremented and by the time first timer of 1s ends, value of 'i' is 6. (happens in VAR declared variables)

- REFERENCE / ADDRESS of 'i'
    - With each loop variable value, the function remembers the reference of variable'i'


    - In case of var, all the 5 copies of functions in the callback queue will point to the same reference of 'i'(same memory space)

*/


/*THEN HOW TO GET 
OUTPUT:
1 (After 1s)
2 (After 2s)
3 (After 3s)
4 (After 4s)
5 (After 5s)
*/

/*
   1. USE let varaible
   - let has a block scope
   - Each iteration of the loop will have its own copy of the variable 'i' in the memory space.
   - i=1 will create a new copy of the variable which forms a closure with the callback function.
   -Each closure will point to the refernce of 'i' and since it has block scope and there are different copies of each variable, so each refrence will have diff. value.
*/

/*
    2. Use Closures

    - The basic idea is to somehow create a new copy for variable 'i' with each iteration.

*/

function x(){
    for(var i=1; i<=5; i++){
        function close(i){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    close(i);
}
}
x();
