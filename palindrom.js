 
 
 var rem;
 var sum=0;
 function palindrome(n){
   var temp=n;
   console.log(temp);
    while(n>0){
 
        rem=n%10;
        sum=(sum*10)+rem;
        n=Math.floor(n/10);
        console.log(sum);
    }
    var sum1=toString.sum;
    console.log(sum1);
    if(temp==sum1)
        console.log("Palindrome no");
        else
        console.log("Not a Palindrome no");
 }

 palindrome(500);