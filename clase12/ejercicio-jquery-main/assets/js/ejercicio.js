





jQuery(() => {
    $("#formulario").on("submit",function (e) {
        e.preventDefault();
        let titulo=$("#title").val();
        let precio=$("#price").val();
        let estrellas=$("#stars").val();
        let reviews=$("#reviews").val();
        let imagen=$("#img").val();
        console.log(titulo);
        $("#productos").append(
            `<div class="col-lg-6 col-md-6 all des">
                <div class="product-item">
                <a href="#"><img src="assets/images/${imagen}.jpg" alt=""></a>
                <div class="down-content">
                    <a href="#">
                    <h4>${titulo}</h4>
                    </a>
                    <h6>$${precio}</h6>
                    <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    </ul>
                    <span>Reviews ${reviews}</span>
                </div>
                </div>
            </div>`
        );
});


});

