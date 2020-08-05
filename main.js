let form = document.getElementById("myForm");

let campos = document.querySelectorAll(".form-control");
let alerta = document.getElementById("alerta")

alerta.style.visibility = "hidden"

form.addEventListener("submit", function(e){
    e.preventDefault()
    for(let x of campos){
        if(x.value === ""){
            x.style.background = "#f8d7da"
            alerta.style.visibility = "visible"
        }else{
            x.style.background = "white"
            alerta.style.visibility = "hidden"
        }
    }
    
})

form.addEventListener("reset", function(e){
    for(let x of campos){
        x.style.background = "white"
        alerta.style.visibility = "hidden"
    }   
})