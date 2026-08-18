const botao = document.getElementById("mudarHumor");
const emoji = document.getElementById("emoji");
const mensagem = document.getElementById("mensagem");


botao.addEventListener("click", () => {
  // Altere o emoji, a mensagem e uma cor da página.
  
   if(document.body.backgroundColor !== "rgb(244,183,16)") {
    
    emoji.textContent = "😁";
    mensagem.textContent = "Hoje será um ótimo dia!";
    document.body.style.backgroundColor = "#e0b710";
   } else {
    emoji.textContent = "😂";
    mensagem.textContent = "Garota que ri e que sonha!";
    document.body.style.backgroundColor = "#e06a10";
   } 
   }
);