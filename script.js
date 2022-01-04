const menuMobile = document.getElementById("menuMobile");

menuMobile.addEventListener('click', activeMenu)

// Responsavel pela ativação do menu mobile e de seu respectivo style
function activeMenu() {
    menuMobile.classList.toggle("activer");

    const menu = document.getElementById("menu");
    menu.classList.toggle("activer");
}


//Desliga menu caso ativo fora do mobile

window.addEventListener('resize', function () {

    var tela = window.innerWidth
    if (window.innerWidth >= 769) {

        const menu = document.getElementById("menu");
        menu.classList.remove("activer");
    }
})


// animação de scroll
window.addEventListener('scroll', animationActive)

function animationActive() {
     var elemento02 = document.getElementById("professionalsContainer02");

     if (elemento02.getBoundingClientRect().top < 500) {
         elemento02.classList.add("animationActive");
     }

     else {
        elemento02.classList.remove("animationActive")
    }
}
