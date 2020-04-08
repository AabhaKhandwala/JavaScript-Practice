//  Write a program that asks the user for a number n and gives them the 
//  possibility to choose between 
//  computing the sum and computing the product of 1,…,n. 

var n= prompt("Enter value of n");
var choice= prompt("Enter your choice: 1 for Sum Or 2 for Multiplication");
switch(choice){
    case 1:
        var sum=0;
        for(let i=0;i<=n;i++){
             if((i%3==0)||(i%5)==0){
             sum=sum+i;
            }   
        }
        console.log(sum);
        break;
     
        case 2:
            var multi=1;
            for(let i=0;i<=n;i++){
                 if((i%3==0)||(i%5)==0){
                 multi=multi*i;
                }   
            }
            console.log(multi);
            break;    
        
}
