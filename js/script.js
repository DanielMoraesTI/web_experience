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