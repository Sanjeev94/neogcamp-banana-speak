// console.log("Script is working from a different file")

// // alert("this script works")

// var username = prompt("give me ur username?")

// var welcomeMessage = "this script works!" + username;
// alert(welcomeMessage);

var btnTranslate =document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
//console.log(txtInput);
var txtOutput = document.querySelector("#output");
console.log(txtOutput);

//txtOutput.innerText = "Sanjeev"
// btnTranslate.addEventListener("click", function clickEventHandler() {
//     console.log("clicked")
// });

//callback
function clickHandler() {
    // console.log("clicked");
    // console.log("input", txtInput.value);
    txtOutput.innerText = "asdasf  " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);

//wiring textarea input


