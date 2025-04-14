const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const form = document.querySelector(".formulario");
const mask = document.querySelector(".mascara-formulario");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible" 
}

function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"

}

// Validação do formulário
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.querySelector('input[name="nome"]').value.trim();
    const telefone = form.querySelector('input[name="telefone"]').value.trim();
    const duvidas = form.querySelector('textarea[name="duvidas"]').value.trim();

    if (!nome || !telefone || !duvidas) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!/^\d{10,11}$/.test(telefone)) {
        alert("Por favor, insira um telefone válido (10 ou 11 dígitos)!");
        return;
    }

    // Se passar na validação, enviar o formulário
    form.submit();
});

// Destacar link ativo ao clicar
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita comportamento padrão
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("active"); // Fecha o menu no celular
        }
        // Rola suavemente para a seção
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });
    });
});

// Destacar link ativo ao rolar
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, .caixa-mae");
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Definir "Home" como ativo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    navLinks.forEach(link => {
        if (link.getAttribute("href") === "#home") {
            link.classList.add("active");
        }
    });
});