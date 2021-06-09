function consultaCep () { /* função para puxar o cep*/



    var cep = document.getElementById("cep").value; /*Pega o valor que o user digitar*/
    var url = "http://viacep.com.br/ws/" + cep + "/json/"; /*Já pega o cep de qualquer lugar*/

    console.log(url);


    $.ajax({ /*Função já no ajax*/
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
           //alert(response.logradouro);
        } 

    })

  

}