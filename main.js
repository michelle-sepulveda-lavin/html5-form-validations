let form = document.getElementById("myForm");

let campos = document.querySelectorAll(".form-control");
let alerta = document.getElementById("alerta")
alerta.style.display = "none"

let camposRequeridos = [];

for(let j of campos){
    if(j.id !== "mensaje"){
        camposRequeridos.push(j)
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    for(let x of camposRequeridos){
        if(x.value === ""){
            x.style.background = "#f8d7da"
            alerta.style.display = "block"
        }else{
            x.style.background = "white"
            alerta.style.display = "none"
        }
    }    
})

form.addEventListener("reset", function(e){
    for(let x of camposRequeridos){
        x.style.background = "white"
        alerta.style.display = "none"
    }   
})