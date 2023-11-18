const Getext1 = document.getElementById("h1");
const textoType1 = "Welcome to EOUJI Rentals Platform"
const Getext2 = document.getElementById("textanime2");
const textoType2 = "Please fill in the form to continue"
let index = 0;


function autoType(){
    if (index < textoType1.length && index < textoType2.length){
        Getext1.innerHTML+= textoType1.charAt(index);
        Getext2.innerHTML+= textoType2.charAt(index);
        index++;
        setTimeout(autoType, 100)

    }
}

autoType();