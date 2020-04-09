// Exercise - Capitalise every element 
// 1. Write a short function to capitalise every element of the array. 
// 2. You must use the Array#map function and the String#uppercase function. 

var myArray=['cat','bat','rat'];

  
    var newArray= myArray.map(function(arr){
              
           return  arr.toUpperCase();
    });
    
    
    
   console.log(newArray);



