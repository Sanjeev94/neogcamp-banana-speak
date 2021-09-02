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

var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslationURL(text) {
    return serverURL + "?" + "text" + text;
}

function errorHandler(error) {
    console.log("error occured", error );
    alert("something wrong with server try after some time");
}


//callback
function clickHandler() {
    // console.log("clicked");
    // console.log("input", txtInput.value);
    //txtOutput.innerText = "asdasf  " + txtInput.value;
    var inputTxt = txtInput.value; // taking input
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
        })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);

//wiring textarea input


