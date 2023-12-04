const Getext1 = document.getElementById("h1");
const textoType1 = "Welcome to EOUJI Rentals Platform"
const Getext2 = document.getElementById("textanime2");
const textoType2 = "Please fill in the form to continue"
let index = 0;


function autoType(){
    if (index < textoType1.length){
        Getext1.innerHTML+= textoType1.charAt(index);
        
    }
    if (index < textoType2.length){
        Getext2.innerHTML+= textoType2.charAt(index);

    }
    index++;

    setTimeout(autoType, 100)
}

autoType();

function tocheckItems(){
    
    const Itemsinput = document.getElementById("ItemsInput");
    const  options = document.getElementById("Items").options;
    let Itemspresent=false;

    for(var i=0; i<options.length; i++){
        if (Itemsinput== options[i]){
            Itemspresent = true;
            break;

        }

    }

    if (!Itemspresent){
        Itemsinput.setCustomValidity("Sorry! Items/Product not available");
    } else{
        Itemsinput.setCustomValidity("");
    }

    

}



