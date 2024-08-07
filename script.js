const button = document.querySelector(".button-convert");
const select1 = document.querySelector(".um");
const select2 = document.querySelector(".dois");
const input = document.querySelector(".input-convert");
const convertValue = document.querySelector(".value-to-convert");
const convertToValue = document.querySelector(".value-convert");



const realToday = 1
const dolarToday = 5.2
const euroToday = 5.5
const libraToday = 3.5


button.addEventListener("click", convert)
function convert(){
         // Primeiro Select//
    if(select1.value == "Real"){
        convertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input.value)
    }
    if(select1.value == "dolar"){
        convertValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input.value)
    }
    if(select1.value == "euro"){
        convertValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input.value)
    }


// Segundo Select  Dólar//
    if(select2.value == "Dolar" && select1.value == "Real"){
        convertToValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input.value / dolarToday)
    } else if(select2.value == "Dolar" && select1.value == "dolar"){
        convertToValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input.value)
    } else if(select2.value == "Dolar" && select1.value == "euro"){
        convertToValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((input.value / euroToday) * dolarToday)
    }

//Segundo Select  Euro//  
    if(select2.value == "Euro" && select1.value == "Real"){
        convertToValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input.value / euroToday)
        
    } else if(select2.value == "Euro" && select1.value == "dolar"){
        convertToValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((input.value / dolarToday) * euroToday)
    } else if(select2.value == "Euro" && select1.value == "euro"){
        convertToValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input.value)
    }

//Segundo select Libra//
    if(select2.value == "Libra" && select1.value == "Real"){
        convertToValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(input.value / libraToday)
    } else if(select2.value == "Libra" && select1.value == "dolar"){
        convertToValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format((input.value / dolarToday) * libraToday)
    } else if(select2.value == "Libra" && select1.value == "euro"){
        convertToValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format((input.value / euroToday) * libraToday)
    }

}
const mudarPais = document.querySelector(".coutry");
const mudarName = document.querySelector(".name-to-convert");
select1.addEventListener("change",mudar2)
function mudar2(){
    if(select1.value == "Real"){
        mudarName.innerHTML = "R$ Real"
        mudarPais.src = "./assets/bandeira-do-brasil.png"
    }
    if(select1.value == "dolar"){
        mudarName.innerHTML = "U$ Dolar"
        mudarPais.src = "./assets/us.png"
    }
    if(select1.value == "euro"){
        mudarName.innerHTML = "€ Euro"
        mudarPais.src = "./assets/logo-euro.png"
    }
}





const countryChange = document.querySelector(".country-img");
const nameCoutry = document.querySelector(".name-convert");
select2.addEventListener("change", mudar);
function mudar(){
    if(select2.value == "Euro"){
        nameCoutry.innerHTML = "€ Euro"
        countryChange.src = "./assets/logo-euro.png"
    }
    if(select2.value == "Dolar"){
        nameCoutry.innerHTML = "U$ Dolar"
        countryChange.src = "./assets/us.png"
    }
    if(select2.value == "Libra"){
        nameCoutry.innerHTML = "£ Libra"
        countryChange.src = "./assets/libra2.png"
    }

    convert()
}