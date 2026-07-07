/*
Debouncing Vs Throttling

- Both are used to reduce the number of times an expensive function is executed.


KEY-PRESS::
- While pressing keys to search for an item in an E-Comm App, 

In Debouncing, the number of network calls will "depend on how fast the keys are pressed". If the keys are pressed before a specified delay, then the timer is cleared otherwise API call is made.

In Throttling , the number of network calls "depends on the time limit". At first, API call is made and then it will be made after a specified timer ends.

(NOTE)
(Debouncing is a better option in key-press example as it depends on the user as how many network calls are made. API call will not be made until keys are pressed faster before the specified delay time.) 




CLICKS::  --- SHOOTING GAME
- Suppose we have a Machine Gun and a pistol
- The machine Gun shoots the bullet after every 100ms and pistol shoots after every 300ms.
- That is, in a machine gun, API call is made after every 100ms . In a pistol, API call is made after every 300ms.

- In this case, Throttling works better than Debouncing. 



Q. Which is better? Debouncing /Throttling
A. Depends on the situation, both are used to limit the rate of execution of function calls. 
*/