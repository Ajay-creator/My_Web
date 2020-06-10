$(document).ready(function(){
    $("#home").click(function(){
        $(".home").show()
        $(".about").hide()
        $(".contact").hide()
        $(".blog").hide()
    });

    $("#about").click(function(){
        $(".home").hide()
        $(".about").show()
        $(".contact").hide()
        $(".blog").hide()
    });

    $("#contact").click(function(){
        $(".home").hide()
        $(".about").hide()
        $(".contact").show()
        $(".blog").hide()
    });

    $("#blog").click(function(){
        $(".home").hide()
        $(".about").hide()
        $(".contact").hide()
        $(".blog").show()
    });
    $("#fb").hover(function () {
      $("span").eq(1).text("facebook")
    });
    $("#insta").hover(function () {
      $("span").eq(2).text("instagram")
    })
    $("#twi").hover(function () {
      $("span").eq(3).text("twitter")
    })
    $("#ln").hover(function () {
      $("span").eq(4).text("linkedin")
    })
    $("#gh").hover(function () {
      $("span").eq(5).text("github")
    })

});
