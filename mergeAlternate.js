var a=['A','B','C','D'];
var b=[1,2,3];
var d=[];
function merge(){
    var x = a.length;

    var y=b.length;
    var i=0;
    var j=0;


    while(i<x&&j<y){
        
        d.push(a[i]);
        i++;
        d.push(b[j]);
        j++;
      
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