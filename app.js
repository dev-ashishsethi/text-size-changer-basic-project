let textInput= document.querySelector("#textInput");
let btnIncrease= document.querySelector("#increaseSize");
let btnDecrease= document.querySelector("#decreaseSize");
let output= document.querySelector("#output");

btnIncrease.addEventListener("click",increaseSize);
btnDecrease.addEventListener("click",decreaseSize);
let size=0;
function increaseSize(){
    size+=2;
    output.style.fontSize=10+size+"px";
    output.innerText=textInput.value;
}

function decreaseSize(){
    size-=2;
    output.style.fontSize=10+size+"px";
    output.innerText=textInput.value;
}