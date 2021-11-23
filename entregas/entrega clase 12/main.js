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
        opacity: "0",
      },
      "slow"
    );
  });


});
