// const Getext1 = document.getElementById("h1");
// const textoType1 = "Welcome to EOUJI Rentals Platform"
// const Getext2 = document.getElementById("textanime2");
// const textoType2 = "Please fill in the form to continue"
// let index = 0;


// function autoType(){
//     if (index < textoType1.length){
//         Getext1.innerHTML+= textoType1.charAt(index);
        
//     }
//     if (index < textoType2.length){
//         Getext2.innerHTML+= textoType2.charAt(index);

//     }
//     index++;

//     setTimeout(autoType, 100)
// }
// autoType();


const Getext1 = document.getElementById("h1");
const textoType1 = "Welcome to EOUJI Rentals Platform";
const Getext2 = document.getElementById("textanime2");
const textoType2 = "Please fill in the form to continue";
let index1 = 0;
let index2 = 0;

function autoTypeText1() {
  if (index1 < textoType1.length) {
    Getext1.innerHTML += textoType1.charAt(index1);
    index1++;
    setTimeout(autoTypeText1, 100); // Typing speed for textoType1
  }else{
    setTimeout(re_type1, 1000)
  }

  function re_type1(){
    Getext1.innerHTML ='';
    index1 =0
    setTimeout(autoTypeText1, 0)

  }
}
autoTypeText1()

function autoTypeText2() {
  if (index2 < textoType2.length) {
    Getext2.innerHTML += textoType2.charAt(index2);
    index2++;
    setTimeout(autoTypeText2, 100); // Typing speed for textoType2
  }else{
    setTimeout(re_type2, 900);
  }

  function re_type2 (){
    Getext2.innerHTML ='';
    index2 =0;
    setTimeout(autoTypeText2, 0);

  }
}
autoTypeText2();




function tocheckItems(){
    
    const Itemsinput = document.getElementById("ItemsInput");
    const  options = document.getElementById("Items").options;
    let Itemspresent=false;

    for(var i=0; i<options.length; i++){
        if (Itemsinput.value === options[i].value){
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

const itemsInput = document.getElementById("canopy_type");
itemsInput.addEventListener("touchstart", () => {
  // Open dropdown menu on touch
});




