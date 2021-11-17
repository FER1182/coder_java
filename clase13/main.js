$(()=>{


$("#show").on("click",function(){
    $("#box").show("slow",function(){
        $("h1").css({
            "color":"#ccc",
            "font-size":"50px",
            "border-bottom":"3px solid #ccc"
        
        })
    });
})

$("#hide").on("click",function(){
    $("#box").hide("fast");
})


$("#toggle").on("click",function(){
    $("#box").toggle(4000,function(){
        console.log("termine la animacion");
    });
})

$("#fadeIn").on("click",function(){
    $("#box").fadeIn(3000,function(){
        $("html, body").animate({
            scrollTop: $("#divCorrido").offset().top
        })
        
    });
})

$("#fadeOut").on("click",function(){
    $("#box").fadeOut();
})

$("#slideDown").on("click",function(){
    $("#box").slideDown();
})

$("#slideUp").on("click",function(){
    $("#box").slideUp();
})

$("#slideToggle").on("click",function(){
    $("#box").slideToggle();
})


//$("h1").css("propiedad","valor");
//$("h1").css("color","green");
/* 
    $("h1").css({
        "color":"#ccc",
        "font-size":"50px",
        "border-bottom":"3px solid #ccc"

    }) */
//$("h1").animate(PROPIEDADES,DURACION,CALLBACK)

/* $("h1").animate({
    "left":"200px",
    "opacity":"0.5"
},"slow",function(){
    console.log("termino la animacion");
}) */


})