    // random value generated 
    var randomNo = Math.floor(Math.random() * 10 + 1); 
      
    // counting the number of guesses 
    // made for correct Guess 
    var guess = 1; 
      
    document.getElementById("submitguess").onclick = function(){ 
      
   // number guessed by user      
   var noGuessed = document.getElementById("guessField").value; 
  
   if(noGuessed == randomNo) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS "); 
   } 
   else if(noGuessed > randomNo) /* if guessed number is greater 
                   than actual number*/ 
   {     
       guess++; 
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else
   { 
       guess++; 
       alert("OOPS SORRY!! TRY A GREATER NUMBER") 
   } 
} 