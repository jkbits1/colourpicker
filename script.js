/* Exercise 2: Color picker */

function setPreviewColor(color) {

    if (color === undefined || color === null){

        return;
    }

    // set bkg color
    $(".preview").css("background-color", color);

    var colorRgb = $(".preview").css("background-color");

    $(".color-code").text(colorRgb);
}

$(document).ready(function(){

    var colour = $(".preview").css("background-color");

    $(document).on('keypress keydown keyup', '#color', function(){

//        alert("hi");

        setPreviewColor($('input').val());

    });

    $(document).on('click', '#add-to-favorite', addColourToFavourites);

    var favColours = ["22ac5e", "d68236", "red", "green", "blue", "violet", "orange", "purple", "yellow", "pink"];

    $.each(favColours, function(index, element){

        addBox(element);
    });

    ;

    var randomIndex = Math.floor(Math.random() * favColours.length);

    $(".preview").css("background-color", favColours[randomIndex]);



});

function addBox(color){

    var boxDiv = "<div class='item' style='background-color: " + color + "'></div>";

    $("#colors").prepend(boxDiv);
}

function addColourToFavourites(){

    addBox($('#color').val());

    $('#color').val("");
}