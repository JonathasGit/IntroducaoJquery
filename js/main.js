function consultaCep () { /* função para puxar o cep*/
    $.ajax({ /*Função já no ajax*/
        url: "http://viacep.com.br/ws/25520171/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        } 

    })

  

}