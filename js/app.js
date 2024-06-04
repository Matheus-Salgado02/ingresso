let quantidadePista=100;
let quantidadeSuperior=200;
let quantidadeInferior=400;

function comprar()
{
    let quantidade =parseInt(document.getElementById('qtd').value);
    

    tipo = document.getElementById('tipo-ingresso').value;
    if(tipo==='inferior')
    {   quantidadeInferior=quantidadeInferior-quantidade;
        if(quantidadeInferior<0)
        {
            quantidadeInferior=quantidadeInferior+quantidade;
            alert("Ingresso indisponível para Cadeira inferior!")
        }
        else
        {
        document.getElementById('qtd-inferior').textContent=quantidadeInferior;
        }
    }
    if(tipo==='pista')
    {   quantidadePista=quantidadePista-quantidade;
        if(quantidadePista<0)
        {   
            quantidadePista=quantidadePista+quantidade;
            alert("Ingresso indisponível para Pista!");
        }
        else
        {
        
        document.getElementById('qtd-pista').textContent=quantidadePista;
        
        }
        
    }
    if(tipo==='superior')
    {   
        quantidadeSuperior=quantidadeSuperior-quantidade;
        if(quantidadeSuperior<0)
        {
            quantidadeSuperior=quantidadeSuperior+quantidade;
            alert("Ingresso indisponível para Cadeira superior!");
        }
        else
        {
        document.getElementById('qtd-superior').textContent=quantidadeSuperior;
        }
    }



}



