var caesarVal = 1 + Math.floor(Math.random() * 200);
console.log(caesarVal);

if (caesarVal === 60) {
    $(".img").html("<a class='img' href='https://i.imgur.com/AfPxIPj.jpg' target='blank'>photo</a>");
} else if (caesarVal === 28) {
    $(".img").html("<a class='img' href='https://i.imgur.com/njqoEDU.jpg' target='blank'>photo</a>");
} else if (caesarVal === 36) {
    $(".img").html("<a class='img' href='https://i.imgur.com/CE9Y10Z.jpg' target='blank'>photo</a>");
} else if (caesarVal === 100) {
    $(".img").html("<a class='img' href='https://i.imgur.com/JfelP3Z.jpg' target='blank'>photo</a>");
}

$(document).ready(function() {
    if ((caesarVal === 60) || (caesarVal === 28) || (caesarVal === 36) || (caesarVal === 100)) {
        showpopup();
    }
    $(".cancel_button").click(function(){
        hidepopup();
    });
    $(".close_button").click(function(){
        hidepopup();
    });
});


function showpopup() {
    $(".popup_box").fadeToggle();
    $(".popup_box").css({"visibility":"visible","display":"block"});
}

function hidepopup() {
    $(".popup_box").fadeToggle();
    $(".popup_box").css({"visibility":"hidden","display":"none"});
}