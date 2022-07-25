$(function() {
    $("#switch").on("click", function(e) {
        $(".light_mode").toggleClass("dark_mode");
        e.preventDefault();
    });
});

$(function() {
    $(".btn_contact").on("click", function(e) {
        $(".modal-container").removeClass("modal-container-close");
        e.preventDefault();
    });
});

$(function() {
    $(".button-modal-close").on("click", function(e) {
        $(".modal-container").addClass("modal-container-close");
        e.preventDefault();
    });
});

const themebutton = document.getElementById("switch");

themebutton.onclick = function () {
    if (document.body.classList.contains("light_body")) {
        document.getElementById('body').classList.remove('light_body');
        document.getElementById('body').classList.add('dark_body');  
    } else {
        document.getElementById('body').classList.remove('dark_body');
        document.getElementById('body').classList.add('light_body');
    }
}