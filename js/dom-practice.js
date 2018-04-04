/*eslint-env browser*/

//STEP 1
function writeMessage(str) {
    "use strict";
    window.alert(str + "I have been clicked!");
}

//STEP 2
var btn2 = window.document.getElementById("step2");
btn2.setAttribute("onclick", "writeMessage('Button 2: ')");

//STEP 3
var btn3 = window.document.getElementById("step3");
var writeMessageButton3 = function () { "use strict"; window.alert("Button 3: I have been clicked!"); };
btn3.addEventListener("click", writeMessageButton3);

//STEP 4
var btn4 = window.document.getElementById("step4");
btn4.addEventListener("click", function () { "use strict"; window.alert("Button 4: I have been clicked!"); });

//STEP 5

//See head section of practice.html

//STEP 6
var link6 = window.document.getElementById("redirect");
link6.setAttribute("href", "#");
link6.setAttribute("onclick", "return writeMessage('Link 6: ')");

//STEP 7
var btn7 = window.document.getElementById("step7");
btn7.addEventListener("click", function () {
    "use strict";
    var inputText = window.document.getElementById("collectInput").value;
    window.alert("Button 7: " + inputText);
    btn7.disabled = true;
});

//STEP 8
var btn8 = window.document.getElementById("step8");
btn8.addEventListener("click", function () {
    "use strict";
    window.open("newpage.html", "newpage", "width=300,height=300");
});

//STEP 9
var i;
function interval() {
    "use strict";
    i = setInterval(function () {
        window.console.log("Learning JavaScript is fun!");
    }, 1000);
}

//STEP 10
var btn10 = window.document.getElementById("step10");
var select10 = window.document.getElementById("step10-select");
btn10.addEventListener("click", function () { "use strict"; window.alert("Button 10: " + select10.value + " selected!"); });