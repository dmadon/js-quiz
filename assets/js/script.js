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
    correct: "ans1"
    },
    {questionId: 3,
    question:  "This is question 3",
    ans1: "question 3, answer 1",
    ans2: "question 3, answer 2",
    ans3: "question 3, answer 3",
    ans4: "question 3, answer 4",
    correct: "ans1"
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
        answer1El.addEventListener("click",showQuestion);


        answer2El.className="answer-button";
        answer2El.textContent=JSON.stringify(questions[i].ans2).slice(1,-1);
        // button2El=document.querySelector(".ansBtn2");
        // button2El.addEventListener("click",clickResponse);
        
    
        answer3El.className="answer-button";
        answer3El.textContent=JSON.stringify(questions[i].ans3).slice(1,-1);
        // button3El=document.querySelector(".ansBtn3");
        // button3El.addEventListener("click",clickResponse);
        
        
        answer4El.className="answer-button";
        answer4El.textContent=JSON.stringify(questions[i].ans4).slice(1,-1);
        // button4El=document.querySelector(".ansBtn4");
        // button4El.addEventListener("click",clickResponse);

        
        i++
        console.log("at end of function, i = ",i);
        }
}//end showQuestion function
    



var startQuiz = function(){    
    startTextEl.className="hidden";
    showQuestion(i);
}


startButtonEl.addEventListener("click",startQuiz);



