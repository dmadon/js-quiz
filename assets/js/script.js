startButtonEl=document.querySelector("#start-button");
timerEl=document.querySelector("#timer");
startTextEl=document.querySelector("#start-text");
mainEl=document.querySelector("#main");
answer1El=document.querySelector("#ans1");
questionEl = document.querySelector("#questionHolder");
questionTextEl = document.querySelector("#questionText");
answer1El = document.querySelector("#ans1");
answer2El = document.querySelector("#ans2");
answer3El = document.querySelector("#ans3");
answer4El = document.querySelector("#ans4");
messageEl = document.querySelector("#messageHolder");
messageTextEl = document.querySelector("#messageText");



questions=[
    {questionId: 1,
    question:  "This is question 1",
    ans1: "question 1, answer 1",
    ans2: "question 1, answer 2",
    ans3: "question 1, answer 3",
    ans4: "question 1, answer 4",
    correct: "ans1"
    },
    {questionId: 2,
    question:  "This is question 2",
    ans1: "question 2, answer 1",
    ans2: "question 2, answer 2",
    ans3: "question 2, answer 3",
    ans4: "question 2, answer 4",
    correct: "ans2"
    },
    {questionId: 3,
    question:  "This is question 3",
    ans1: "question 3, answer 1",
    ans2: "question 3, answer 2",
    ans3: "question 3, answer 3",
    ans4: "question 3, answer 4",
    correct: "ans3"
    },
];



var i=0;






var showQuestion = function(){
    
    
        console.log("at beginning of function, i = ",i);
                
        if (i == questions.length){
            alert("no more questions");//REPLACE THIS ALERT WITH END GAME FUNCTIONALITY - STOP TIMER AND LOG THE FINAL TIME AS PLAYER'S SCORE
        }

        else{
        questionEl.setAttribute("data-question-id",i);
        
        questionTextEl.textContent =JSON.stringify(questions[i].question).slice(1,-1);
        
        answer1El.className="answer-button";
        answer1El.textContent=JSON.stringify(questions[i].ans1).slice(1,-1);
        answer1El.addEventListener("click",checkAnswer);


        answer2El.className="answer-button";
        answer2El.textContent=JSON.stringify(questions[i].ans2).slice(1,-1);
        answer2El.addEventListener("click",checkAnswer);
        
    
        answer3El.className="answer-button";
        answer3El.textContent=JSON.stringify(questions[i].ans3).slice(1,-1);
        answer3El.addEventListener("click",checkAnswer);
        
        
        answer4El.className="answer-button";
        answer4El.textContent=JSON.stringify(questions[i].ans4).slice(1,-1);
        answer4El.addEventListener("click",checkAnswer);
               
        
        console.log("at end of function, i = ",i);
        }

}// end showQuestion function
    


// var startTimer = function()




var t=75;

var startQuiz = function(){    
    startTextEl.className="hidden";
    setInterval(startTimer = function(){
        t--;
        {timerEl.textContent = t-1}
    
    
    },1000);


    showQuestion(i);
}// end startQuizfunction


var checkAnswer = function(event){
    
    var targetEl=event.target;
    console.log(targetEl.id);
    if(targetEl.id == questions[i].correct){
        messageTextEl.className = "";
        messageTextEl.textContent = "Correct!";
        if(i < questions.length-1){
            i++;
            showQuestion();
        }
        else{
            // I set the endGame function to run after a timeout because when user anwered the last question in the quiz, endGame was executing before
            // the last answer was confirmed as correct or incorrect. This is a workaround to ensure the answer is verified before endGame executes.
            var timeOut = setTimeout(endGame, 100);
        }
    }

    else{
        messageTextEl.className = "red-text";
        messageTextEl.textContent = "Incorrect - lose 10 seconds";
        if(i < questions.length-1){
            i++;
            showQuestion();
        }
        else{
            // I set the endGame function to run after a timeout because when user anwered the last question in the quiz, endGame was executing before
            // the last answer was confirmed as correct or incorrect. This is a workaround to ensure the answer is verified before endGame executes.
            var timeOut = setTimeout(endGame, 100);
        }
    }
}// end checkAnswer function


var endGame = function(){
    alert("You have reached the end of the game.");
    
}







startButtonEl.addEventListener("click",startQuiz);



