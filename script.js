
const num = document.getElementById("number")
const td = document.querySelectorAll("td")
function zmianaKoloru(){
    for(let i = 0; i < 5; i++){
        td[i].setAttribute("style","background-color: hsl("+num.value+", " + (100 - i * 20) + "%, 50%);");
    }
}