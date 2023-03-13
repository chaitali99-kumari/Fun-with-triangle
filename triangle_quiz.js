const quizForm = document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit-btn");
const showScore=document.querySelector("#show-score");

const answer=["180°", "isoscles triangle", "right angled"]

function calculateScore(){
    let index=0;
    let score=0;
    const result = new FormData(quizForm);
    for(let value of result.values())
    {
        if(value === answer[index]){
            score=score + 1;
        }
        index = index+1;
    }
    showScore.innerText = "your score is "+score;
}

submitBtn.addEventListener('click',calculateScore);