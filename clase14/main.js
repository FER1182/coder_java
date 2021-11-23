$(()=>{
   /*  const URL ="https://jsonplaceholder.typicode.com/photos";

    $("#ejemploGet").on("click",function(){
        $.get(URL,function(data,status){
            console.log(status);
            if(status==="success"){
                let datos=data;
                for(const item of datos){
                    $("#getData").append(
                        `
                        <div>
                        <h3>${item.title}</h3>
                        <img src="${item.url}"/>
                        </div>
                        `
                    )
                }
            }
        })
    })

    let datosPost={
        nombre:"yael",
        direccion:"rivadavia 1111"
    }
    $("#ejemploPost").on("click",function(){
        $.post(URL,datosPost,function(data,status){
            alert(`el estado es ${status}`);
            console.log(`el nomreb es  ${data.nombre}`);
        })
    })
 */

    let sendUrl =$("#formulario").attr("action");
    let metodo =$("#formulario").attr("method");
    let nombre;
    let mail;
    let msj;

    $("#send").on("click",function(e){
        e.preventDefault();
        $.ajax({
            beforeSend : function(){
                $("#status").text("enviando.....");
                nombre =$("#nombre").val();
                mail =$("#mail").val();
                msj =$("#mensaje").val();
            },
            url:sendUrl,
            type:metodo,
            data:{name:nombre,email:mail,mensaje:msj},
            success:function(resp){
                console.log(resp);
            },
            error: function(jqXHL,status,resp){
                console.log(status);
                console.log(resp);

                
            },  
        
        
        });

    })


})
const promise = new Promise((resolve,reject)=>{
    const  num = Math.floor(Math.random()*10);
    setTimeout(
        ()=> num > 5 ? resolve(num) : reject (new Error("el numero es menor a 5")),
        1000
    );
})

promise
    .then(num=>console.log(num))
    .catch(error=>console.log(error));    

