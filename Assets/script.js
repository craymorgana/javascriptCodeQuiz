var body = document.body;
var h1El = document.createElement("h1");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var containerEl = document.createElement("div");



h1El.textContent = "Welcome to the JavaScript quiz. Test your knowledge!"

body.appendChild(containerEl)
containerEl.appendChild(h1El)


// set attributes 
h1El.setAttribute("style", "color:blue; text-align:center; margin:auto; font-size:30px;");
listEl.setAttribute("style", "list-style-type: upper-alpha;")
li1.setAttribute("style", "font-size:20px; margin-left:20vw; margin-right:20vw; padding:5px; background-color: #333333")
li2.setAttribute("style", "font-size:20px; margin-left:20vw; margin-right:20vw; padding:5px; background-color: #333333")
li3.setAttribute("style", "font-size:20px; margin-left:20vw; margin-right:20vw; padding:5px; background-color: #333333")
li4.setAttribute("style", "font-size:20px; margin-left:20vw; margin-right:20vw; padding:5px; background-color: #333333")




function question1() {
 /*What is a valid variable declaration:
    var
    variable
    item
    vars
 */

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

}
question1();
function question2() {
    /*
    What is not a build in object?
    array
    boolean
    function
    null
    */

    h1El.textContent = "What is a valid variable declaration?"
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

}

function question3() {
    /*

    */
}