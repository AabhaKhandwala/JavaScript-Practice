// Exercise - A big mess 
// You can generate a random integer between 0 and 500 using the following code: 
// Math.​random​()​ ​*​ ​500 You can generate a jQuery object that contains everything on the page 
// inside the body element like so: $​(​'body *'​);
// 1. Write a jQuery function that iterates over 
// everything on the page using each, makes them all position:absolute, and assigns random top 
// and left values. 
// You need to use each here to give them all different random values. 



$('body *').each(function(){
    var randomTop=Math.floor( Math.random()*500);
    var randomLeft= Math.floor(Math.random()*500);

    $(this).css(
     {   "position": "absolute",
          "top":randomTop,
          "left":randomLeft

     });
});

