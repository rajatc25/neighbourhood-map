$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper1").toggleClass("toggled");
    if ($("#arrow").attr("src") == "images/arrowOpen.png") {
        $("#arrow").attr('src', "images/arrowClose.png");
    } else {
        $("#arrow").attr('src', "images/arrowOpen.png");
    }
});