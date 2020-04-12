
function isLeapYear(year) { 
    
      
    if((year % 400 === 0) || ((year % 100 != 0) 
                             && (year % 4 === 0))){                           
                            
        counter++;
        console.log(year +" is leap year!! ");
    }
//; else
        //console.log(year +" is not leap year!! ");
                             
} 
var counter=0;
for(let i=0;counter<20;i++){
    var checkYear=2020+i;
    isLeapYear(checkYear);
}