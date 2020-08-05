let form = document.getElementById("myForm");
let card = document.getElementById("card");
let cvc = document.getElementById("cvc");
let amount = document.getElementById("amount");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let city = document.getElementById("city");
let state = document.getElementById("state");
let postalcode = document.getElementById("postalcode");
let tarjetas = document.getElementById("tarjetas");
let mensaje = document.getElementById("mensaje");
let bodycard = document.querySelector(".card-body")
let alerta = document.querySelector(".alert")
let reseteador = document.getElementById("reseteador")

alerta.style.visibility = "hidden";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(card.value === "" || cvc.value === "" || amount.value === "" || firstname.value === "" || lastname.value === "" || city.value === "" || state.value === "" || postalcode.value === ""){
        alerta.style.visibility = "visible";     
    }

    if(card.value == ""){
        card.style.background = "#f8d7da";
    }else if(card.value !== ""){
        card.style.background = "white";
    }
    if(cvc.value == ""){
        cvc.style.background = "#f8d7da";
    }else if(card.value !== ""){
        cvc.style.background = "white";
    }
    if(amount.value == ""){
        amount.style.background = "#f8d7da";
    }else if(card.value !== ""){
        amount.style.background = "white";
    }
    if(firstname.value == ""){
        firstname.style.background = "#f8d7da";
    }else if(card.value !== ""){
        firstname.style.background = "white";
    }
    if(lastname.value == ""){
        lastname.style.background = "#f8d7da";
    }else if(card.value !== ""){
        lastname.style.background = "white";
    }
    if(city.value == ""){
        city.style.background = "#f8d7da";
    }else if(card.value !== ""){
        city.style.background = "white";
    }
    if(state.value == ""){
        state.style.background = "#f8d7da";
    }else if(card.value !== ""){
        state.style.background = "white";
    }
    if(postalcode.value == ""){
        postalcode.style.background = "#f8d7da";
    }else if(card.value !== ""){
        postalcode.style.background = "white";
    }
    if(mensaje.value == ""){
        mensaje.style.background = "#f8d7da";
    }else if(card.value !== ""){
        mensaje.style.background = "white";
    }
    
    if(card.value !== "" && cvc.value !== "" && amount.value !== "" && firstname.value !== "" && lastname.value !== "" && city.value !== "" && state.value !== "" && postalcode.value !== ""){
        alerta.style.visibility = "hidden";  
        form.submit()   
    } 
})

form.addEventListener("reset", function(e){
    card.style.background ="white";
    cvc.style.background ="white";
    amount.style.background ="white";
    firstname.style.background ="white";
    lastname.style.background ="white";
    city.style.background ="white";
    state.style.background ="white";
    postalcode.style.background ="white";
    mensaje.style.background ="white";
    alerta.style.visibility = "hidden";
})

