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

// BEGINNING OF ARRAY OF QUIZ QUESTIONS
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
    ans1: "Both the <head> and the <body> sections are correct",
    ans2: "The <head> section",
    ans3: "The <body> section",
    ans4: "None of the above",
    correct: "ans1"
    },
    {questionId: 3,
    question:  "What is the correct syntax for referring to an external script called 'abc.js'?",
    ans1: "<script = 'abc.js'>",
    ans2: "<script href = 'abc.js'>",
    ans3: "<script src = 'abc.js'>",
    ans4: "<script name = 'abc.js'>",
    correct: "ans3"
    },
    {questionId: 4,
    question:  "How do you write 'Good morning!' in an alert box?",
    ans1: "msgBox('Good morning!');",
    ans2: "alertBox('Good morning!');",
    ans3: "alert('Good morning!');",
    ans4: "msg('Good morning!');",
    correct: "ans3"
    },
    {questionId: 5,
        question:  "How do you create a function in JavaScript?",
        ans1: "myFunction:()",
        ans2: "function myFunction()",
        ans3: "function = myFunction()",
        ans4: "function: myFunction()",
        correct: "ans2"
    },
    {questionId: 6,
        question:  "How do you call a function named 'myFunction'?",
        ans1: "myFunction()",
        ans2: "function: myFunction()",
        ans3: "call myFunction()",
        ans4: "call function myFunction()",
        correct: "ans1"
    },
    {questionId: 7,
        question:  "How do you write an IF statement in JavaScript?",
        ans1: "if i = 7 then",
        ans2: "if i == 7 then",
        ans3: "if i = 7",
        ans4: "if (i == 7)",
        correct: "ans4"
    },
    {questionId: 8,
        question:  "How do you write an IF statement for executing code if 'i' is NOT equal to 7?",
        ans1: "if i <> 7",
        ans2: "if (i != 7)",
        ans3: "if (i <> 7)",
        ans4: "if i = !7 then",
        correct: "ans2"
    },
    {questionId: 9,
        question:  "How does a WHILE loop start?",
        ans1: "while (i <= 10)",
        ans2: "while (i <= 10, i++)",
        ans3: "while (i = between 1 and 10)",
        ans4: "while i = 1 to 10",
        correct: "ans1"
    },
    {questionId: 10,
        question:  "How does a FOR loop start?",
        ans1: "for (i = 0; i <= 5)",
        ans2: "for (i = 0; i <= 5; i++)",
        ans3: "for i = 1 to 5",
        ans4: "for (i < 5; i++)",
        correct: "ans2"
    },
    {questionId: 11,
        question:  "How can you add a comment in JavaScript?",
        ans1: "'This is a comment'",
        ans2: "<!-- This is a comment -->",
        ans3: "/* This is a comment */ ",
        ans4: "//This is a comment",
        correct: "ans4"
    },
    {questionId: 12,
        question:  "What is the correct way to write a JavaScript array?",
        ans1: "var colors = (1:'red', 2:'green', 3:'blue')",
        ans2: "var colors = 'red', 'green', 'blue'",
        ans3: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        ans4: "var colors = ['red', 'green', 'blue']",
        correct: "ans4"
    },
    {questionId: 13,
        question:  "How do you find the number with the highest value of x and y?",
        ans1: "Math.ceil(x,y)",
        ans2: "ceil(x,y)",
        ans3: "Math.max(x,y)",
        ans4: "top(x,y)",
        correct: "ans3"
    },
    {questionId: 14,
        question:  "Which event occurs when the user clicks on an HTML element?",
        ans1: "onmouseclick",
        ans2: "onclick",
        ans3: "onmouseover",
        ans4: "onchange",
        correct: "ans2"
    },
    {questionId: 15,
        question:  "How do you declare a JavaScript variable?",
        ans1: "var carName",
        ans2: "vbl carName",
        ans3: "v carName",
        ans4: "variable carName",
        correct: "ans1"
    },
];//end of array of quiz questions


var t=90;
var i=0;

// BEGINNING OF startTimer FUNCTION
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
}// end of startTimer function


//BEGINNING OF startQuiz FUNCTION
var startQuiz = function(){   
    startTextEl.className="hidden";
    countdown = setInterval(startTimer,1000);
    showQuestion(i);
}// end startQuizfunction

// BEGINNING OF stopTimer FUNCTION
var stopTimer = function(){
    clearInterval(countdown);
    endGame();
}// end of stopTimer function


// BEGINNING OF showQuestion FUNCTION
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


// BEGINNING OF checkAnswer FUNCTION
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
        t= Math.max(0,t-10); // deduct 10 seconds for incorrect answer, set timer to the greater of either t-10 seconds or 0 so that score can never be less than zero
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

// BEGINNING OF endGame FUNCTION
var endGame = function(){

    if(timerEl.textContent=="Time's Up!"){

        var score = 0;

        endGameTextEl.textContent=("You ran out of time! Your score is "+score+".")
        
    }
    else if (i === questions.length-1){

        var score = t+1;// add one second back to the final score to account for the one second that it always seems to take between stopping the timer and returning the final score. Final score always seems to be one second less than what the timer shows.

        endGameTextEl.textContent=("You answered all the questions! Your score is "+score+".")

    }
    questionEl.className="hidden";
    messageEl.className="hidden";
    endGameEl.className="";
    endGameTextEl.className="";
    buttonHolderEl.className="";
}// end endGame function

// BEGINNING OF saveScores function
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

// BEGINNING OF cancelScores FUNCTION
var cancelScores = function(){
    window.location.href="./index.html";
}// end of cancelScores function

// BEGINNING OF loadScores FUNCTION
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
}// end of loadScores function


    startButtonEl.addEventListener("click",startQuiz);
    saveScoreBtnEl.addEventListener("click",saveScores);
    cancelScoreBtnEl.addEventListener("click",cancelScores);
    highScoresPageLinkEl.addEventListener("click",loadScores);








