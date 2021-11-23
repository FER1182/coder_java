<<<<<<< HEAD
//jquery

$(() => {
 
        
    
  
  // inserta graficamente la prenda en el carrito

  $("#compra").on("click", function () {
    $("#box").animate(
      {
        left: "800px",
        opacity: "0",
      },
      "slow"
    );
    $("h1").text("agregaste el producto");

      
});

  $("#compra1").on("click", function () {
    $("#box1").animate(
      {
        bottom: "300px",
        left: "800px",
=======
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
>>>>>>> b5fd7813c3f7c3f390a4b98e240fcba9886e7e7c
        opacity: "0",
      },
      "slow"
    );
  });
<<<<<<< HEAD


=======
>>>>>>> b5fd7813c3f7c3f390a4b98e240fcba9886e7e7c
});
