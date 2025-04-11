const form = document.querySelector(".formulario")
const mask = document.querySelector(".mascara-formulario")

function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "trasnlateX(-50%)"
    mask.style.visibility = "visible" 
}

function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "trasnlateX(0)"
    mask.style.visibility = "hidden"

}