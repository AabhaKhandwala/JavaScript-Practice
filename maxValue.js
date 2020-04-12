minValue = Infinity;
maxValue = -Infinity;

var arr=[40,20,10,90,70];

for (item of arr) {
    // find minimum value
    if (item < minValue)
    minValue = item;
              
    // find maximum value
    if (item > maxValue)
    maxValue = item;
    
}

console.log("minValue is: "+minValue);  
console.log("maxValue is: "+maxValue);