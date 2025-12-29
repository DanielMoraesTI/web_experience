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

function confirmar(event) {
    event.preventDefault();
    alert("Compra realizada, assim que for confirmado o pagamento o seu ingresso será enviado para seu e-mail!");
};

function responder(event) {
    event.preventDefault();
    alert("Obrigado pelo contacto, iremos responder em até 48 horas");
};