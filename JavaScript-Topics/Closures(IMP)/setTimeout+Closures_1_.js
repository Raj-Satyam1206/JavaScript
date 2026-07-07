/* setTimeout is an asynchronous API method which executes a callback function after a scheduled timer*/

function x() {
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);

    console.log("JavaScript");
}
x();


/* setTimeout Execution 

- setTimeout does not execute in its domain.
- A copy of the callback function is sent to the callback queue when the timer ends.

 ---- Will JS wait for 3 sec and then print "JavaScript"?
 NO

- Since it is asynchronous, Line no. 9 gets printed and after 3 seconds, value of 'i' gets printed.(callback func. is executed)
*/
