var body = document.body;
var h1El = document.createElement("h1");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var buttonEl = document.createElement("button")
var containerEl = document.createElement("div");
var initials = document.querySelector(".inputInitials")
var scores = document.querySelector("#score")
var timer = document.querySelector("#time")
var timeLeft = 75;
var i = 0;
var questionsArray = [
    {
    question: "What is a valid variable declaration?",
    answer1: "var",
    answer2: "variable",
    answer3: "item",
    answer4: "vars",
    answer: "var"
    },
    {
    question: "What is not a built in object?",
    answer1: "array",
    answer2: "boolean",
    answer3: "function",
    answer4: "null",
    answer: "null"
    },
    {
    question: "All of these are primitive types except?",
    answer1: "Number",
    answer2: "String",
    answer3: "Null",
    answer4: "Function",
    answer: "Function"
    },
    {
    question: "What Math Object Method returns an absolute value?",
    answer1: "ceil(x)",
    answer2: "abs(x)",
    answer3: "exp(x)",
    answer4: "round(x)",
    answer: "abs(x)"
    },
    {
    question: "Which is the strict equality operator?",
    answer1: "===",
    answer2: "!==",
    answer3: "=",
    answer4: "==",
    answer: "==="
    }
];



function startPage() {
    h1El.textContent = "Welcome to the JavaScript quiz. Test your knowledge!"
    timer.textContent = "Time Left: " + timeLeft;
    body.appendChild(containerEl)
    containerEl.appendChild(h1El)
    body.appendChild(buttonEl)
    initials.remove();

    buttonEl.textContent= "Start Quiz"
    buttonEl.addEventListener("click", function(event) {
        buttonEl.remove();
        countdown();
        startQuiz();
    })

    scores.addEventListener("click", function(event){
        scorePage();
    })
} 




// set attributes 
h1El.setAttribute("style", "text-align:center; margin:auto; font-size:30px;");
scores.setAttribute("style", "border-style:solid; cursor:pointer; padding:2px;")
timer.setAttribute("style", "border-style:solid; padding:2px;")
listEl.setAttribute("style", "list-style-type: upper-alpha; border-color:")
li1.setAttribute("style", "font-size:20px; margin-left:20vw; margin-right:20vw; padding:5px; background-color: #e3e3e3")
li2.setAttribute("style", "font-size:20px; margin-left:20vw; margin-top:2px; margin-right:20vw; padding:5px; background-color: #e3e3e3")
li3.setAttribute("style", "font-size:20px; margin-left:20vw; margin-top:2px; margin-right:20vw; padding:5px; background-color: #e3e3e3")
li4.setAttribute("style", "font-size:20px; margin-left:20vw; margin-top:2px; margin-right:20vw; padding:5px; background-color: #e3e3e3")
buttonEl.setAttribute("style", "cursor:pointer; margin-left:45vw; border-radius:3px; margin-top:5vh")
li1.setAttribute("class", "li1")
li2.setAttribute("class", "li2")
li3.setAttribute("class", "li3")
li4.setAttribute("class", "li4")
// incorrect answer color #233142



function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timer.textContent = "Time Left: " + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
          } 
    }, 1000);
}

// add formating for score page and receive score
function scorePage(){
    buttonEl.remove();
    listEl.remove();
    timer.remove();
    h1El.textContent = "High scores"
 
}



function startQuiz() {

    h1El.textContent = questionsArray[i].question;
    li1.textContent = questionsArray[i].answer1;
    li2.textContent = questionsArray[i].answer2;  
    li3.textContent = questionsArray[i].answer3;   
    li4.textContent = questionsArray[i].answer4;
    
    body.appendChild(containerEl);
    containerEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4)
    
    containerEl.addEventListener("click", function(event) {
                console.log('event :>> ', event)
                if (event.srcElement.innerHTML !== questionsArray[i].answer){
                    timeLeft = timeLeft - 15;
                }

                if (i< questionsArray.length -1){
                    i++;
                startQuiz();
                }
            })
    
}

/*
function question1() {
    
    h1El.textContent = "What is a valid variable declaration?"
    li1.textContent = "var";
    li2.textContent = "variable";  
    li3.textContent = "item";   
    li4.textContent = "vars";
    
    body.appendChild(containerEl);
    containerEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    
    listEl.addEventListener("click", function(event){
        var element = event.target;
        if (element.matches("li.li1")){
            question2();
        } else if (element.matches("li.li2")){
            timeLeft = timeLeft - 15;
            question2();
        }else if (element.matches("li.li3")){
            timeLeft = timeLeft - 15;
            question2();
        }else if (element.matches("li.li4")){
            timeLeft = timeLeft - 15;
            question2();

        }

        
    })
    
    
    
    listEl.removeEventListener("click", function(event){
})

}         
function question2() {
    
    h1El.textContent = "What is not a built in object?"
    li1.textContent = "array";
    li2.textContent = "boolean";  
    li3.textContent = "function";   
    li4.textContent = "null";
    
    body.appendChild(containerEl);
    containerEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    
    listEl.addEventListener("click", function (event) {
        var element = event.target;
        
        
        li1.addEventListener("click", function() {
            timeLeft = timeLeft-15;
            return;
        })
        li2.addEventListener("click", function() {
            timeLeft = timeLeft-15;
            return;
        })
        
        li3.addEventListener("click", function() {
            timeLeft = timeLeft-15;
            return;
        })
        li4.addEventListener("click", function() {
            timeLeft = timeLeft;
            return;
        })

            if (element.matches(".li1")){
                timeLeft = timeLeft - 15;
            } else if (element.matches(".li2")){
                timeLeft = timeLeft - 15;
            }else if (element.matches(".li3")){
                timeLeft = timeLeft - 15;
            }else if (element.matches(".li4")){
                return;
            }
    
    })


    if (timeLeft <= 0)
    enterHighScore();
    // if score === 0 return to score page

}
function question3() {
    
    containerEl.remove();
    listEl.remove();

    h1El.textContent = "All of these are primitive types except?"
    li1.textContent = "Number";
    li2.textContent = "String";  
    li3.textContent = "Null";   
    li4.textContent = "Function";

    body.appendChild(containerEl);
    containerEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    listEl.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches(".li1")){
            timeLeft = timeLeft - 15;
        } else if (element.matches(".li2")){
            timeLeft = timeLeft - 15;
        }else if (element.matches(".li3")){
            timeLeft = timeLeft - 15;
        }else if (element.matches(".li4")){
            return;
        }
        question4();
    })

    // li1.addEventListener("click", function() {
    //     timeLeft = timeLeft-15;
    //     question4();
    //     return;
    // })
    // li2.addEventListener("click", function() {
    //     timeLeft = timeLeft-15;
    //     question4();
    //     return;
    // })
    // li3.addEventListener("click", function() {
    //     timeLeft = timeLeft-15;
    //     question4();
    //     return;
    // })
    // li4.addEventListener("click", function() {
    //     timeLeft = timeLeft;
    //     question4();
    //     return;
    // })

    if (timeLeft <= 0)
    enterHighScore();
    

}
function question4() {
    h1El.textContent = "What Math Object Method returns an absolute value?"
    li1.textContent = "ceil(x)";
    li2.textContent = "abs(x)";  
    li3.textContent = "exp(x)";   
    li4.textContent = "round(x)";

    body.appendChild(containerEl);
    containerEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    listEl.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches(".li1")){
            timeLeft = timeLeft - 15;
        } else if (element.matches(".li2")){
            return;
        }else if (element.matches(".li3")){
            timeLeft = timeLeft - 15;
        }else if (element.matches(".li4")){
            timeLeft = timeLeft - 15;
        }
        question5();
    })


    // li1.addEventListener("click", function() {
    //     timeLeft = timeLeft -15;
    //     question5();
    //     return;
    // })
    // li2.addEventListener("click", function() {
    //     timeLeft = timeLeft;
    //     question5();
    //     return;
    // })
    // li3.addEventListener("click", function() {
    //     timeLeft = timeLeft -15;
    //     question5();
    //     return;
    // })
    // li4.addEventListener("click", function() {
    //     timeLeft = timeLeft -15;
    //     question5();
    //     return;
    // })
 
    if (timeLeft <= 0)
    enterHighScore();

 
    // if score === 0 return to score page
}
function question5() {
    h1El.textContent = "Which is the strict equality operator?"
    li1.textContent = "===";
    li2.textContent = "!==";  
    li3.textContent = "=";   
    li4.textContent = "==";

    body.appendChild(containerEl);
    containerEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    listEl.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches(".li1")){
            timeLeft = timeLeft - 15;
        } else if (element.matches(".li2")){
            return;
        }else if (element.matches(".li3")){
            timeLeft = timeLeft - 15;
        }else if (element.matches(".li4")){
            timeLeft = timeLeft - 15;
        }
        
    })

    // li1.addEventListener("click", function() {
    //     timeLeft = timeLeft;
    //     enterHighScore();
    // })
    // li2.addEventListener("click", function() {
    //     timeLeft = timeLeft -15;
    //     enterHighScore();
    // })
    // li3.addEventListener("click", function() {
    //     timeLeft = timeLeft -15;
    //     enterHighScore();
    // })
    // li4.addEventListener("click", function() {
    //     timeLeft = timeLeft -15;
    //     enterHighScore();
    // })

    if (timeLeft <= 0)
    enterHighScore();

        enterHighScore();
}
*/

function enterHighScore(){
    listEl.remove();
    console.log('timeLeft :>> ', timeLeft);
    if (timeLeft < 0)
    timeLeft = 0;
    h1El.textContent = "Your score is " + timeLeft + "."

    h1El.appendChild(initials);
}

startPage();