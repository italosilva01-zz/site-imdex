let cabecalho = document.querySelector("header");

function naoVa(cabecalho){
    
 
    cabecalho.onmouseover = function(){
        alert("Não vá embora");
    };  
}

setTimeout(naoVa(cabecalho),1000);