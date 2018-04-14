// Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("triangle");
var triangle2 = document.getElementById("triangle2");
var triangle3 = document.getElementById("triangle3");
var triangle4 = document.getElementById("triangle4");
var triangle5 = document.getElementById("triangle5");

var length = triangle.getTotalLength();
var length2 = triangle2.getTotalLength();
var length3 = triangle3.getTotalLength();
var length4 = triangle4.getTotalLength();
var length5 = triangle5.getTotalLength();


// The start position of the drawing
triangle.style.strokeDasharray = length;
triangle2.style.strokeDasharray = length2;
triangle3.style.strokeDasharray = length3;
triangle4.style.strokeDasharray = length4;
triangle5.style.strokeDasharray = length5;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;
triangle2.style.strokeDashoffset = length2;
triangle3.style.strokeDashoffset = length3;
triangle4.style.strokeDashoffset = length4;
triangle5.style.strokeDashoffset = length5;


// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  var draw2 = length2 * scrollpercent;
  var draw3 = length3 * scrollpercent;
  var draw4 = length4 * scrollpercent;
  var draw5 = length5 * scrollpercent;
  

  
  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
  triangle2.style.strokeDashoffset = length2 - draw2;
  triangle3.style.strokeDashoffset = length3 - draw3;
  triangle4.style.strokeDashoffset = length4 - draw4;
  triangle5.style.strokeDashoffset = length5 - draw5;

}