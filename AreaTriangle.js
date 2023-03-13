const input = document.querySelectorAll(".input");
const chckBtn = document.querySelector("#chck-btn");
const output = document.querySelector("#output");

function calculateArea(){
    let area=((Number(input[0].value))*(Number(input[1].value)))/2;
    output.innerText = "Area of Triangle is " +area+" cm square.";
}





chckBtn.addEventListener('click',calculateArea);