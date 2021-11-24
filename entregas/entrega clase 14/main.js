$(()=>{
    const URL ="usuarios.json";

    $("#ejemploGet").on("click",function(){
        let i=1;
        $.get(URL,function(data,status){
            console.log(status);
            if(status==="success"){
                let datos=data;
                for(const item of datos){
                    $("#tablaUsuario").append(
                                    `
                       <tr>
                        <th scope="row">${i++}</th>
                        <td>${item.nombre}</td>
                        <td>${item.apellido}</td>
                        <td>${item.dni}</td>
                        <td>${item.mail}</td>
                        <td>${item.pass}</td>
                        
                      </tr>`
                    )
                }
            }
        })
    })

  


})