var a=[8,2,10,3];
var b=[5,1,9];

function mergeSort(){
   
var d=a.concat(b);
console.log(d);
var sortArr= d.sort();   
    
    console.log(sortArr);

}

mergeSort();

function merge(){
    var x = a.length;

    var y=b.length;
    var i=0;
    var j=0;
    var d=[];


    while(i<x&&j<y){

        if(a[i]<b[j]){
            d.push(a[i]);
            i++;
        }else{
            d.push(b[j]);
            j++;

        }  
        
      
    }

    while(i<x){
        d.push(a[i])
        i++;
    }
    while(j<y){
        d.push(b[j])
        j++;
    }

    console.log(d);
}

merge();