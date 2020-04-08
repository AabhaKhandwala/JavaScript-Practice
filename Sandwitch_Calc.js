// Exercise - A Sandwich Calculator 
// 1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
// 2. The function should return the total number of possible sandwiches based on the amount of slices available, 
// so if there are 10 slices, it should return 5. Test your function with an alert box. 
// 3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese. 
// 4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible 
// sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 
// 1. You'll need an if statement to make this work. 

function SandwichCalculator(slicesOfBread,slicesOfCheese){

    var sandwiches = Math.floor(slicesOfBread/2);
    
    
    if((sandwiches>slicesOfCheese)&&(slicesOfCheese>0)&&(slicesOfBread>1)){
        sandwiches=slicesOfCheese;
        console.log(sandwiches);
        return sandwiches;
    }else if(slicesOfCheese>=sandwiches){
        console.log(sandwiches);
        return sandwiches;
    }else if((slicesOfCheese==0)||(slicesOfBread<2)){
        console.log("No sandwitches!!");
        return 0;
    }

}

SandwichCalculator(8,6);
SandwichCalculator(13,6);
SandwichCalculator(3,15);
SandwichCalculator(1,5);