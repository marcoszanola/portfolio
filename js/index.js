document.querySelectorAll(".banner-projeto").forEach(banner => {
    banner.addEventListener("click", e => {
        e.preventDefault();
        const id = banner.getAttribute("data-projeto");
        document.getElementById(`submenu-${id}`).classList.add("ativo");
        document.getElementById('tela-escura').style.display = 'block';
    });
});

document.querySelectorAll(".submenu-fechar").forEach(botao => {
    botao.addEventListener("click", () => {
        botao.closest(".submenu-projeto").classList.remove("ativo");
        document.getElementById('tela-escura').style.display = 'none';
    });
});

