//jquery

$(() => {
  // inserta graficamente la prenda en el carrito

  $("#compra").on("click", function () {
    $("#box").animate(
      {
        left: "800px",
        opacity: "0",
      },
      "50000",
      function () {
        $("#box").animate({
          left: "0px",
          opacity: "1",
        });
        $("h1").text("AGREGA PRODUCTOS AL CARRITO");
      }
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
      "18000",
      function () {
        $("#box1").animate({
          bottom: "0px",
          left: "0px",
          opacity: "1",
        });
        $("h1").text("AGREGA PRODUCTOS AL CARRITO");
      }
    );
    $("h1").text("agregaste el producto");
  });
});
