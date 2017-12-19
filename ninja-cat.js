$(document).ready(function(){
    $("img").each(function(i, obj){
        randomizeImages($(this));
    });
    $("img").hover(function(){
        $(this).animate({
            borderWidth: 3,
            opacity: 0.9
        }, 100, function(){});
    }, function(){
        $(this).animate({
            borderWidth: 0,
            opacity: 1
        }, 100, function(){});
    });

    $("img").click(function(e){
        e.preventDefault();
        randomizeImages($(this));
    });

    function randomizeImages(thisObj){        
        var imgName;
        var thisRow = $(thisObj).attr("altRow");
        console.log(thisRow);
        var rand=Math.floor(Math.random() * 3) + 1;
        if(rand==1){
            imgName="cat"; 
        }
        else if(rand==2){
            imgName="ninja";
        }
        else if(rand==3){
            imgName="bart";
        }
        $(thisObj).attr({
            altSrc: imgName,
            alt: imgName+thisRow,
            src: "img\/"+imgName+thisRow+".png"
        });
    }
});