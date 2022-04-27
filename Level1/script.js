var messageArray = ["Olá usuário, seja bem vindo ao meu mundo, a partir de agora sua maior ajuda serão as dicas que eu irei lhe fornecer, caso decida parar e deixar tudo como está apenas saia de seu computador e de meu dominio e pronto, você está livre, não vou atrás de você e não irei te fazer mal, mas caso continue eu irei ficar muito grato, afinal sei que no final de forma inevitável você irá falhar, e isso, isso me diverte."]; 
var textPosition = 0;
var speed = 15; 

typeWriter = () => {
    document.querySelector("#demo").
    innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>"

    if(textPosition++ != messageArray[0].length)
        setTimeout(typeWriter, speed);
}

window.addEventListener("load", typeWriter);