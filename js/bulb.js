$(function () {
    var flag = true;
    
    $("#onoff").click(function () {
        if (flag){
        var imgname = "images/on.jpg"
        flag = false;
    }
        else{
            var imgname = "images/off.jpg"
            flag = true;
        }
        $("img").attr("src",imgname);
    });
    //hide show toggle buttons
    $("#btnhide").click(function(){
        $("#text").hide(500);
    });
    $("#btnshow").click(function(){
        $("#text").show();
    });
    $("#btntoggle").click(function(){
        $("#text").toggle();
    });
    
    //fade in out toggle
    $("#fadein").click(function(){
        $("#box").fadeIn();
    });
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
    
    
});
