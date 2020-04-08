// Exercise - Rollover 
// 1. Review the list of events on: http://api.jquery.com/category/events/ 
// 2. Create code that listens for a hover event. 
// When the user rolls over a div, place the word "over" in that div. 
// 3. When the user mouses out of the div, place the word "out" in the div. 

$( "div" ).hover(
    function() {
      $( this ).append( $( "<span> over</span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );