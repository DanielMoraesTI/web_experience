const dia = document.getElementById("dia");
const eventos = document.querySelectorAll(".evento");

dia.addEventListener("change", () => {
    const escolha = dia.value;

    eventos.forEach(evento => {
        if(escolha === "todos" || evento.dataset.dia === escolha) {
            evento.style.display = "block";
        } else {
            evento.style.display = "none";
        }
    });  
});


function confirmarCompra(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem-confirmacao");

    const nomeUtilizador = nomeInput.value;

    mensagem.innerHTML = `
        <strong>Olá, ${nomeUtilizador}!</strong><br>
        Sua compra foi realizada com sucesso! <br>
        Seus bilhetes serão enviados para o e-mail indicado!
    `;

    mensagem.style.display = "block";
    mensagem.style.color = "black";
    mensagem.style.marginTop = "20px";
    mensagem.style.border = "2px outset blueviolet";
    mensagem.style.backgroundColor = "#ffffff85";
    mensagem.style.textAlign = "center";
    mensagem.style.width = "75%";
}


// Confirmação de envio do formulário de contacto
function mostrarConfirmacao(event) {
  event.preventDefault();

  const nomeInput = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem-confirmacao");

  const nomeUtilizador = nomeInput.value;

   mensagem.innerHTML = `
    <strong>Olá, ${nomeUtilizador}!</strong><br>
    Sua mensagem foi enviada com sucesso! <br>
    Entraremos em contacto em breve! 😊
  `;

  mensagem.style.display = "block";
  mensagem.style.color = "black";
  mensagem.style.marginTop = "20px";
  mensagem.style.border = "2px outset blueviolet";
  mensagem.style.backgroundColor = "#ffffff85";
  mensagem.style.textAlign = "center";
  mensagem.style.width = "75%";
}
