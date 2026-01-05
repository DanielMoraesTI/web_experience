const abrirModal = document.getElementById("comprar");
const fecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modalPesquisa");

abrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
});

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    alert("Obrigado pela sua contribuição na pesquisa!");
});