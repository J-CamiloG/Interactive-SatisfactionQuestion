const cart_ready_main = document.querySelector(".cart_ready");
const submit = document.getElementById("submit");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset"); 

submit.addEventListener("click", cambio);   
reset.addEventListener("click",resetear);

function cambio() {
    container.style.display = "none"; 
    cart_ready_main.style.display = "flex"; 
}
function resetear() {
    container.style.display = "flex"; 
    cart_ready_main.style.display = "none";
}