$(function() {
    $(".navigation_list .switch a").on("click", function(e) {
        $(".light_mode").toggleClass("dark_mode");
        $('.light_body').toggleClass("dark_body");
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