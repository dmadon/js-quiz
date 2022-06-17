startButtonEl=document.querySelector("#start-button");
timerEl=document.querySelector("#timer");
startTextEl=document.querySelector("#start-text");
mainEl=document.querySelector("#main");
buttonEl=document.querySelector(".answer-button");



questions=[
    {questionId: 1,
    question:  "This is question 1",
    ans1: "question 1, answer 1",
    ans1rs: "correct",
    ans2: "question 1, answer 2",
    ans2rs: "wrong",
    ans3: "question 1, answer 3",
    ans3rs: "wrong",
    ans4: "question 1, answer 4",
    ans4rs: "wrong"
    },
    {questionId: 2,
    question:  "This is question 2",
    ans1: "question 2, answer 1",
    ans1rs: "correct",
    ans2: "question 2, answer 2",
    ans2rs: "wrong",
    ans3: "question 2, answer 3",
    ans3rs: "wrong",
    ans4: "question 2, answer 4",
    ans4rs: "wrong"
    },
    {questionId: 3,
    question:  "This is question 3",
    ans1: "question 3, answer 1",
    ans1rs: "correct",
    ans2: "question 3, answer 2",
    ans2rs: "wrong",
    ans3: "question 3, answer 3",
    ans3rs: "wrong",
    ans4: "question 3, answer 4",
    ans4rs: "wrong"
    },
];




    var createQuestion = function(event){
        
        
        for (i = 0; i <= questions.length-1; i++){

            var target = event.target;
            var targetId = (target.id);
            console.log(targetId);
            startTextEl.className="hidden";


            var questionEl = document.createElement("div");
            questionEl.className="question";
            questionEl.innerHTML = "<p>"+JSON.stringify(questions[i].question).slice(1,-1)+"</p>";
            mainEl.appendChild(questionEl);

            var answer1El = document.createElement("button");
            answer1El.className="ansBtn1";
            answer1El.id="ansBtn1";
            answer1El.innerHTML=JSON.stringify(questions[i].ans1).slice(1,-1);
            questionEl.appendChild(answer1El);
            button1El=document.querySelector(".ansBtn1"); 
            button1El.addEventListener("click",createQuestion);

            var answer2El = document.createElement("button");
            answer2El.className="ansBtn2";
            answer2El.id="ansBtn2";
            answer2El.innerHTML=JSON.stringify(questions[i].ans2).slice(1,-1);
            questionEl.appendChild(answer2El);
            button2El=document.querySelector(".ansBtn2");
            button2El.addEventListener("click",createQuestion);
            
            var answer3El = document.createElement("button");
            answer3El.className="ansBtn3";
            answer3El.id="ansBtn3";
            answer3El.innerHTML=JSON.stringify(questions[i].ans3).slice(1,-1);
            questionEl.appendChild(answer3El);
            button3El=document.querySelector(".ansBtn3");
            button3El.addEventListener("click",createQuestion);
            
            var answer4El = document.createElement("button");
            answer4El.className="ansBtn4";
            answer4El.id="ansBtn4";
            answer4El.innerHTML=JSON.stringify(questions[i].ans4).slice(1,-1);
            questionEl.appendChild(answer4El);
            button4El=document.querySelector(".ansBtn4");
            button4El.addEventListener("click",createQuestion);
      


          break;
        

        }
    }



startButtonEl.addEventListener("click",createQuestion);



