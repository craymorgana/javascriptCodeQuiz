var body = document.body;
var h1El = document.createElement("h1");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var buttonEl = document.createElement("button")
var containerEl = document.createElement("div");
var scores = document.querySelector("#score")
var timer = document.querySelector("#time")
var timeLeft = 75;
var answer = 0;

startPage();

function startPage() {
    h1El.textContent = "Welcome to the JavaScript quiz. Test your knowledge!"
    timer.textContent = "Time Left: " + timeLeft;
    body.appendChild(containerEl)
    containerEl.appendChild(h1El)
    body.appendChild(buttonEl)
    buttonEl.textContent= "Start Quiz"
    buttonEl.addEventListener("click", function(event) {
        buttonEl.remove();
        question1();
        countdown();
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
// incorrect answer color #233142



function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timer.textContent = "Time Left: " + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timer.textContent = '';
          }
    }, 1000);
}

// add formating for score page and receive score
function scorePage(){
    h1El.textContent = "High scores"
    buttonEl.remove();
}

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

    li1.addEventListener("click", function() {
        timeLeft = timeLeft;
    
    })
    li2.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    
    })
    li3.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li4.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
 
    containerEl.addEventListener("click", function(){
        question2();
    })

    if (timeLeft === 0)
        scorePage();
    
    // if score === 0 return to score page
}
function question2() {
    /*
    What is not a build in object?
    array
    boolean
    function
    null
    */

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

    li1.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li2.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li3.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li4.addEventListener("click", function() {
        timeLeft = timeLeft;
    })
 
    containerEl.addEventListener("click", function(){
        question3();
    })

    if (timeLeft === 0)
    scorePage(); 
    // if score === 0 return to score page
}
function question3() {
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

    li1.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li2.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li3.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li4.addEventListener("click", function() {
        timeLeft = timeLeft;
    })
 
    containerEl.addEventListener("click", function(){
        question4();
    })

    if (timeLeft === 0)
        scorePage();
    // if score === 0 return to score page
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

    li1.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li2.addEventListener("click", function() {
        timeLeft = timeLeft;
    })
    li3.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li4.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
 
    containerEl.addEventListener("click", function(){
        question5();
    })

    if (timeLeft === 0)
        scorePage();
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

    li1.addEventListener("click", function() {
        timeLeft = timeLeft;
    })
    li2.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li3.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })
    li4.addEventListener("click", function() {
        timeLeft = timeLeft -15;
    })

    if (timeLeft === 0)
        scorePage();
 
        // return to high score page
    containerEl.addEventListener("click", function(){
    })

    
}


