/* Exercise 2: Color picker */

function setPreviewColor(color) {

    if (color === undefined || color === null){

        return;
    }

    // set bkg color
    $(".preview").css("background-color", color);
}

$(document).ready(function(){

    var colour = $(".preview").css("background-color");

    $(document).on('keypress keydown keyup', '#color', function(){

//        alert("hi");

        setPreviewColor($('input').val());

    });
});