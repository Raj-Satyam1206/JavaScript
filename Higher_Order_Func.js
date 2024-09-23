/*
Q. What is a Higher-Order Function? 

A. Higher-order functions are those functions which accepts other functions as arguments or return a function.


Here, y is a higher-order function 
      x is a callback function.
*/

function x(){
    console.log("x");
}

function y(x){
    x();
}


// How to bring modularity in the code while writing functions? 
// Write functions to print area, circumference, diameter of circles for each radius in the radius array.

const radius = [3,1,2,4];

const calcarea = function (radius){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(3.14 * radius[i] * radius[i]);
    }
    return output;
};


const calccircumference = function (radius){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(2* 3.14 * radius[i]);
    }
    return output;
};


const calcdiameter = function (radius){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
};

/*  MODULARITY::

    Focus on DRY Principle (Dont repeat yourself)

    We see that we are duplicating almost 90% of code each time and only the logic changes.
    
    We can make it modular by having only one function which calls three different function for area, circum and diameter.

    Each function will have its own implementation.
    */

    const area = function(radius){
        return 3.14 * radius * radius;
    }; //Only task of area() is to take a radius value and return the area for it.

    const circumference = function(radius){
        return 2 * 3.14 * radius;
    };

    const diameter = function(radius){
        return 2 * radius;
    };

    
    const calculate = function(arr, logic){
        const output = [];
        for(let i=0; i<arr.length; i++){
            output.push(logic(arr[i]));
        }
        return output;
    };

    //With this we can access all 3 functions from same function.


    radius.map(diameter);


    radius.map(function(x){
        return 2*x;
    })

    radius.map(x => 2*x);

    

    console.log(calculate(radius, area));
    console.log(calculate(radius, circumference));
    console.log(calculate(radius, diameter));