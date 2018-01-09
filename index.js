var original = $("#hi").html();

function hoverChange() {
  $("#hi").html("<h1>It's nice to meet you!</h1>");
  console.log("this means the toggle works");
}

function hoverChangeBack() {
  $("#hi").html("<h1>Hi, I'm Rebecca Zeng.</h1>");
  console.log("hihi");
}

function scrollDown() {
  // menu bar should scroll down and turn #e7e7e7
  // when the page is scrolling down
  // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#menubar').offset().top + $('#menubar').height();

// on scroll,
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > mainbottom) {
        $('#menubar').addClass('past-main');
    } else {
        $('#menubar').removeClass('past-main');
    }

});
}

function setupHandlers() {
  $("#hi").on({mouseenter: hoverChange, mouseleave: hoverChangeBack});
  console.log("yay for setup handlers");
}

$(document).ready();
