function consultaCep () { /* função para puxar o cep*/



    var cep = document.getElementById("cep").value; /*Pega o valor que o user digitar*/
    var url = "http://viacep.com.br/ws/" + cep + "/json/"; /*Já pega o cep de qualquer lugar*/

    console.log(url);


    $.ajax({ /*Função já no ajax*/
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro); /*Mesma coisa do que document.getElementById porem com menos código.*/
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html("CEP " + response.cep); // Vai puxar o cep e mostrar na tela 

            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
           //alert(response.logradouro);
        } 

    })

  

}