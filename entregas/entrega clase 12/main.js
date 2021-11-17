$(() => {
  /*   
    $("#toggle").on("click",function(){
        $("#box").toggle(4000,function(){
           
        });
    })
     */

  //$("h1").css("propiedad","valor");
  //$("h1").css("color","green");
  /* 
        $("h1").css({
            "color":"#ccc",
            "font-size":"50px",
            "border-bottom":"3px solid #ccc"
    
        }) */
  //$("h1").animate(PROPIEDADES,DURACION,CALLBACK)
  
  $("#toggle").on("click", function () {
    $("#box").animate(
      {
        left: "400px",
        opacity: "0",
      },
      "slow"
    );
  });
});
