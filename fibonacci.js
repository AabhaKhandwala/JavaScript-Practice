// .Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8. 

var a=0;
var b=1;
var fib;


function fibonacciNos(){
    
    for(let i=2;i<10;i++){
        
        fib=a+b;
            console.log(fib);
        a=b;
        b=fib;

    }   

}

fibonacciNos();