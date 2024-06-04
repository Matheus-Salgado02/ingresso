

const valor=document.getElementById("texto");
const ToFa=document.getElementById("CeToFa");
const ToCe=document.getElementById("FaToCe");
let temp;




document.getElementById("converter").onclick=function()
{

    if(ToFa.checked)
    {  
        temp=Number(texto.value)
        temp=temp*1.8+32
        document.getElementById("resultado").textContent=temp+"°F";
    }

    else if(ToCe.checked)
    {
        temp=Number(texto.value)
        temp=(temp-32)*5/9
        document.getElementById("resultado").textContent=temp+ "°C";

    }

    else
    {
        document.getElementById("resultado").textContent="Selecione uma opção"


    }
}