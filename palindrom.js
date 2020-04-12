 
 
 var rem;
 var sum=0;
 function palindrome(n){
   var temp=n;
   console.log(temp);
    while(n>0){
 
        rem=n%10;
        sum=(sum*10)+rem;
        n=Math.floor(n/10);
        
    }
    
    console.log(sum);
    if(temp==sum)
        console.log("Palindrome no");
        else
        console.log("Not a Palindrome no");
 } 

 function palindromeString(str){
     console.log(str);
     var newStr="";
     for(let i=str.length-1;i>=0;i--){
         newStr=newStr+str[i];
         //console.log(newStr);
     }
     console.log(newStr);
     if(str==newStr)
         console.log("String is Palindrom");
     else
     console.log("String is not Palindrom");
 }


 palindromeString('aabha');

 palindrome(500);