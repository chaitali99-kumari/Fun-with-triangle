const inputAngle = document.querySelectorAll(".input-angle");
const chckBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output")

function calculateSumOfAngle(a,b,c){
   let sumOfAngle=0;
   sumOfAngle = a+b+c;
   return(sumOfAngle);
}
function checkTriangle()
{
    if(Number(inputAngle[0].value)&&Number(inputAngle[1].value)&&Number(inputAngle[2].value))
    {
    const sumOfAngle = calculateSumOfAngle( Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value));
    if(sumOfAngle===180)
    output.innerText="Yaay it is a triangle🥳🥳";
    else
    output.innerText="No it is not a triangle😥😥";
    }
    else
    output.innerText="Plz input all the angles😕";
}
chckBtn.addEventListener('click', checkTriangle);