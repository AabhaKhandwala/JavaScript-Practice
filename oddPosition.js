
var a=['a','b','c','d','e'];

function oddPosition(){
    for(let i=0;i<a.length;i++){
        if(i%2!=0){
            console.log(a[i]);
        }
    }
}

oddPosition();