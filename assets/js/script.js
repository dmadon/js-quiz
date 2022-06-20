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


var t=30;
var i=0;
















var startTimer = function(){
    // if player has answered all questions, the status on the timer element has been set to "stop" by the checkAnswer function. if status is "stop" then stopTimer function should 
    // clearInterval, stop the timer where it is and go to endGame function.
    if(timerEl.getAttribute("data-timer-status") === "stop"){
        stopTimer();
    
    }
    // if time has run out before all questions are answered, timer text shows "Time's Up!" and stopTimer function should clearInterval and go to endGame function.
    else if(t === 0) {
        timerEl.textContent = "Time's Up!";
        timerEl.className = "red-text";
        var timeOut = setTimeout(stopTimer,100);
        
    }
    // if there are still questions to be answered and time still on the clock, keep counting down.
    else if (t>0){
        timerEl.textContent = t;
        t--;
    }
}

var startQuiz = function(){   

    startTextEl.className="hidden";
    countdown = setInterval(startTimer,1000);
    showQuestion(i);

}// end startQuizfunction

var stopTimer = function(){
    clearInterval(countdown);
    endGame();
}

var showQuestion = function(){


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
               
    


}// end showQuestion function





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
            timerEl.setAttribute("data-timer-status","stop");
        }
    }

    else{
        messageTextEl.className = "red-text";
        messageTextEl.textContent = "Incorrect - lose 10 seconds";
        t=t-10;
        if(i < questions.length-1){
            i++;
            showQuestion();
        }
        else{
            timerEl.setAttribute("data-timer-status","stop");
        }
    }
}// end checkAnswer function


var endGame = function(){

    if(timerEl.textContent=="Time's Up!"){

        alert("Your time ran out. Your score is 0.");


    }
    else if (i === questions.length-1){

        alert("You have answered all the questions. Your score is "+ timerEl.textContent);
    }
    
    
}







startButtonEl.addEventListener("click",startQuiz);



