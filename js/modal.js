const fecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modalPesquisa");

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    alert("Obrigado pela sua contribuição na pesquisa!");
});