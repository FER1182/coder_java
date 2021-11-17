$(()=>{
    //esconde el carrito

    $("#cart-items").slideUp();

    // abrir carrito cuando hacemos click en el icono

    $("#cart").on("click",function(){
        $("#cart-items").slideToggle();
    })

    //calcula cantidad de productos en el carrito

    const itemsCarrito =()=>{
        $("#items-basket").text(`(${$("#list-item").children().length})`);
    }    
    //calcular el precio total
    
    const precioTotal=()=>{
        let precioTotal=0;
        $(".eachPrice").each(function(){
            let precioItem=parseFloat($(this).text());
            precioTotal+=precioItem;
        })
        $("#total-price").text(`$${precioTotal}`);
    };

    
    //agregrar el item cuando clikeamos
    $(".item").on("click",function(){
        //se abre el carrito
        $("#cart-items").slideDown();

        //buscamos los datos

        let nombre = $(this).find("h4").text();
        let precio = `<span class="eachPrice">${parseFloat($(this).find(".price").text())}</span>`;
        
        let remove=`<button class="remove">X</button>`;
        $("#list-item").append(`<li>${nombre} - $${precio} - ${remove}</li>`);
        itemsCarrito();

        //calcula precio total
        precioTotal();

        $(".remove").on("click",function(){
            $(this).parent().remove();
            itemsCarrito();
            precioTotal();
        })

    })     
})