/* 
    map() , 
    reduce(), 
    filter() 

    They are Higher-Order Functions in JS.
*/

/* MAP()
    map() creates a new array and transforms each element in the original array by applying the callback function to each element. 
*/

const arr = [5,1,3,2,6];
//Binary - ["101", "1", "11", "10", "110"]


//1.
const output1 = arr.map(function(x){
    return x.toString(2);
});


//2.
const output2 = arr.map(x => x.toString(2));



//3.
function binary(x){
    return x.toString(2);
}

const output3 = arr.map(binary);




/* FILTER()
    filter() creates a new array by keeping only those elements from the original array which satisfy a specific condition in the callback function.
*/
const arr2 = [5,1,3,2,6];

const output4 = arr2.filter(function(x){
    return x % 2;
});


/* REDUCE()
    reduce() will iterate over the elements of the array and accummulate to a single value.

    reduce() take a single argument with 2 parameters(accumulator, current value).

    It also takes an optional argument as the starting value of accumulator.
*/

const array = [5,1,3,2,6];
//find the sum of the elements

//1.

const calcSum = function(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}


//2.
const output5 = array.reduce(function(sum,curr){
    sum = sum + curr;
    return sum;
},0);



//find the max of the elements

//1. 
function findMax(array){
    let max = 0;
    for (let i=0; i<array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}


//2.
const output6 = array.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
},0);



//TRICKY MAP() ,FILTER(), REDUCE()  EXAMPLES


const users = [
    {firstname: 'John',lastname:"Alice", age: 25},
    {firstname: 'Jane',lastname:"Alice", age: 30},
    {firstname: 'Bob',lastname:"Alice", age: 35},
    {firstname: 'Alice',lastname:"Alice", age: 25},
];

//1.
// Find the list of full names ["John Alice" , "Jane Alice"]
// We have to access each element , hence use map()

const out1 = users.map(function(x){
    return x.firstname + " " + x.lastname;
});

//2. 
// Find the number of users with a particular age {25:2,30:1,35:1}
// We have to get to a number, that is reducing it to a single value in an object by iterating over the array.

const out2 = users.reduce(function(result, curr){
    //result is empty object initially
    if(result[curr.age]){
        result[curr.age]++;
    }
    else{
        result[curr.age] = 1;
    }
}, {});

//3.
// Find the firstName of all users with age less than 30
// filter() will give the required objects and then we can access those objects through map()
const out3 = users.filter(x => x.age < 30).map(x => x.firstname);



