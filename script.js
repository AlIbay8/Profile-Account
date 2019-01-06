var caesarVal = 1 + Math.floor(Math.random() * 200);
console.log(caesarVal);

$("strong").click(function() {
    if (caesarVal === 60) {
        $(".img").html("<img class='max' src='https://i.imgur.com/AfPxIPj.jpg'>");
    } else if (caesarVal === 28) {
        $(".img").html("<img class='max' src='https://i.imgur.com/njqoEDU.jpg'>");
    } else if (caesarVal === 36) {
        $(".img").html("<img class='max'src='https://i.imgur.com/CE9Y10Z.jpg'>");
    } else if (caesarVal === 100) {
        $(".img").html("<img class='max' src='https://i.imgur.com/JfelP3Z.jpg'>");
    }
});

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