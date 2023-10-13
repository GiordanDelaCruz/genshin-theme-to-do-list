// Get reference to all objects
const dateHeader = document.getElementsByClassName("date-header");
const menuHeaders = document.getElementsByClassName("menu-header");
const chibiImages = document.getElementsByClassName("chibi-character");
const mainContainer = document.getElementsByClassName("main-container");
const characterQuote = document.getElementsByClassName("character-quote");

// Keep Track Current Theme
var currentTheme = "ganyu";

// Ganyu Quotes
const ganyuQuotes = [
    `"Next on the agenda..."`,
    `"We're way behind schedule..."`,
    `"Healthy body, healthy mind..."`, 
    `"I'm a little low on energy."`, 
    `"Time to begin work?"`
];

// Wanderer Quotes
const wandererQuotes = [
    `"Huh. How irritating."`, 
    `"Cry louder!"`, 
    `"You dare to gaze upon me!?"`, 
    `"...You're dead."`, 
    `"Prepare yourself for punishment."`, 
];

// Turn on correct theme at the start
updateTheme();

function ganyuTheme(){
    currentTheme = "ganyu";

    // Change to a random Ganyu Quote
    var randNum = Math.floor( Math.random() * ganyuQuotes.length );
    characterQuote[0].innerHTML = ganyuQuotes[randNum];

    // Change color of date header
    dateHeader[0].classList.remove("bg-wanderer-grey-blue-2");
    dateHeader[0].classList.add("bg-ganyu-light-red");
    dateHeader[0].style.borderColor = "red";

    // Change main container color
    mainContainer[0].classList.remove("bg-wanderer-pastel-blue");
    mainContainer[0].classList.add("bg-ganyu-pastel-blue");

    // Change CSS image source to Ganyu Chibi
    chibiImages[0].src="/images/ganyu-chibi-4.png";
    chibiImages[1].src="/images/ganyu-chibi-3.png";
    chibiImages[2].src="/images/ganyu-chibi-5.png";

    // Change theme to ganyu colored background
    for(var i = 0; i < menuHeaders.length; i ++){
        menuHeaders[i].classList.remove("bg-wanderer-grey-blue-1");
        menuHeaders[i].classList.add("bg-ganyu-dark-blue");
    }
};  

function wandererTheme(){
    currentTheme = "wanderer";

    // Change to a random Wanderer Quote
    var randNum = Math.floor(Math.random() * wandererQuotes.length);
    characterQuote[0].innerHTML = wandererQuotes[randNum];

    // Change color of date header
    dateHeader[0].classList.remove("bg-ganyu-light-red");
    dateHeader[0].classList.add("bg-wanderer-grey-blue-2");
    dateHeader[0].style.borderColor = "#686589";

    // Change main container color
    mainContainer[0].classList.remove("bg-ganyu-pastel-blue");
    mainContainer[0].classList.add("bg-wanderer-pastel-blue");

    // Change CSS image source to Wanderer Chibi
    chibiImages[0].src="/images/wanderer-chibi-1.png";
    chibiImages[1].src="/images/wanderer-chibi-2.png";
    chibiImages[2].src="/images/wanderer-chibi-3.png";

    // Change theme to Wanderer colored background
    for(var i = 0; i < menuHeaders.length; i ++){
        menuHeaders[i].classList.remove("bg-ganyu-dark-blue");
        menuHeaders[i].classList.add("bg-wanderer-grey-blue-1");
    }
};  

function updateTheme(){
    if( currentTheme == "ganyu" ){
        ganyuTheme();
    }else if( currentTheme == "wanderer"){
        wandererTheme();
    }
}