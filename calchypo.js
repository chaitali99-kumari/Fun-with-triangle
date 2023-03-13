const inputSide = document.querySelectorAll(".input-side");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function sumOfSides(a,b){
    let sum=0;
    sum=(a*a)+(b*b);
    return sum;
}
function calculateHypotenuse(){
    const sumOfSide = sumOfSides(Number(inputSide[0].value),Number(inputSide[1].value));
    let h= Math.sqrt(sumOfSide);
    h=h.toFixed(2);
    output.innerText="Hypotenuse of triangle is " + h;
    
}
calcBtn.addEventListener('click', calculateHypotenuse);