const questions = [

{
question:"Which language is used to structure a webpage?",
answers:["CSS","HTML","Python","Java"],
correct:1
},

{
question:"Which language is used for styling webpages?",
answers:["HTML","JavaScript","CSS","SQL"],
correct:2
},

{
question:"Which language makes webpages interactive?",
answers:["HTML","CSS","JavaScript","PHP"],
correct:2
}

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextBtn");

function showQuestion(){

let q = questions[currentQuestion];

questionElement.textContent = q.question;

answersElement.innerHTML = "";

q.answers.forEach((answer,index)=>{

let button = document.createElement("button");

button.textContent = answer;

button.onclick = () => checkAnswer(index);

answersElement.appendChild(button);

});

}

function checkAnswer(index){

if(index === questions[currentQuestion].correct){

score++;

}

nextButton.style.display = "block";

}

nextButton.onclick = () => {

currentQuestion++;

if(currentQuestion < questions.length){

showQuestion();
nextButton.style.display = "none";

}else{

questionElement.textContent = "Quiz Finished!";
answersElement.innerHTML = "";
scoreElement.textContent = "Score: " + score + " / " + questions.length;

}

};

showQuestion();