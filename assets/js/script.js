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
endGameEl = document.querySelector("#endGameNotice");
endGameTextEl = document.querySelector("#endGameText");
initialsEl = document.querySelector("#initialsInputHolder");
initialsInstructionsEl = document.querySelector("#initialsInstructions");
inputInitialsEl = document.querySelector("#inputInitials");
buttonHolderEl = document.querySelector("#button-holder");
saveScoreBtnEl = document.querySelector("#saveScoreBtn");
cancelScoreBtnEl = document.querySelector("#cancelScoreBtn");
highScoresListEl = document.querySelector("#scores-list-group");
noScoresMessageEl = document.querySelector("#noScoresMessage");
validateInitialsEl = document.querySelector("#validate-initials");
highScoresPageLinkEl = document.querySelector("#load-high-scores");


questions=[
    {questionId: 1,
    question:  "Inside which HTML element do we put the JavaScript?",
    ans1: "<js>",
    ans2: "<javascript>",
    ans3: "<script>",
    ans4: "<scripting>",
    correct: "ans3"
    },
    {questionId: 2,
    question:  "Where is the correct place to insert a JavaScript?",
    ans1: "The <head> section",
    ans2: "The <body> section",
    ans3: "Both the <head> and the <body> sections are correct",
    ans4: "None of the above",
    correct: "ans2"
    },
    {questionId: 3,
    question:  "What is the correct syntax for referring to an external script called 'xxx.js'?",
    ans1: "<script = 'xxx.js'>",
    ans2: "<script href = 'xxx.js'",
    ans3: "<script src = 'xxx.js'",
    ans4: "<script name = 'xxx.js'",
    correct: "ans3"
    },
    {questionId: 4,
    question:  "How do you write 'Hello World' in an alert box?",
    ans1: "msgBox('Hello World')",
    ans2: "alertBox('Hello World')",
    ans3: "alert('Hello World')",
    ans4: "msg('Hello World')'",
    correct: "ans3"
    },
];


var t=75;
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
        var timeOut = setTimeout(stopTimer, 10);
        
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
        t= Math.max(0,t-10);
        timerEl.textContent=t;
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

        var score = 0;

        endGameTextEl.textContent=("You ran out of time! Your score is "+score+".")
        
    }
    else if (i === questions.length-1){

        var score = t;

        endGameTextEl.textContent=("You answered all the questions! Your score is "+score+".")

    }

    questionEl.className="hidden";
    messageEl.className="hidden";
    endGameEl.className="";
    endGameTextEl.className="";
    buttonHolderEl.className="";
}// end endGame function



var saveScores = function(){
    
    var savedScores = localStorage.getItem("scores");

    if(!savedScores){
        highScores=[];
        if(inputInitialsEl.value == ""){           
            validateInitialsEl.className="red-text";
            var vanishMessage = setTimeout (function(){
                validateInitialsEl.className="hidden";
            },2000);
        }
        else{
            highScores.unshift({
                "initials": inputInitialsEl.value,
                "score": t
            });
            localStorage.setItem("scores", JSON.stringify(highScores));
            window.location.href="./high-scores.html";
        }   
        
    }
    else{
        highScores=[];
        if(inputInitialsEl.value == ""){
            validateInitialsEl.className="red-text";
            var vanishMessage = setTimeout (function(){
                validateInitialsEl.className="hidden";
            },2000);
        }
        else{
        savedScores=JSON.parse(savedScores);
            for (var i = 0; i < 10; i++) {
                highScores.push(savedScores[i]);
            }
            highScores.unshift({
                "initials": inputInitialsEl.value,
                "score": t
            });
            
            localStorage.setItem("scores", JSON.stringify(highScores));
            window.location.href="./high-scores.html";
        }
    }
    
    return;
}// end of saveScores function

var cancelScores = function(){
    window.location.href="./index.html";
}// end of cancelScores function






var loadScores = function(){

    var savedScores = localStorage.getItem("scores");
    
    if(!savedScores){
        noScoresMessageEl.className="";
        }
    else{
        savedScores=JSON.parse(savedScores);
        for (var i = 0; i < 10; i++) {
            var listItem = document.createElement("li");
            listItem.className = "list-item";
            listItem.textContent = savedScores[i].initials +": "+savedScores[i].score;
            highScoresListEl.appendChild(listItem);
        }
    }
    return;
}


    startButtonEl.addEventListener("click",startQuiz);
    saveScoreBtnEl.addEventListener("click",saveScores);
    cancelScoreBtnEl.addEventListener("click",cancelScores);
    highScoresPageLinkEl.addEventListener("click",loadScores);








