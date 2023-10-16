// Get reference to all objects
const dateHeader = document.getElementsByClassName("date-header");
const menuHeaders = document.getElementsByClassName("menu-header");
const inputRectangles = document.getElementsByClassName("input-group-text");
const chibiImages = document.getElementsByClassName("chibi-character");
const mainContainer = document.getElementsByClassName("main-container");
const characterQuote = document.getElementsByClassName("character-quote");
const footer = document.getElementsByTagName("footer");
const body = document.getElementsByTagName("body");

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
    characterQuote[0].classList.add("text-ganyu-light-red");
    characterQuote[0].classList.remove("text-wanderer-royal-blue");

    // Change color of date header
    dateHeader[0].classList.remove("bg-wanderer-royal-blue");
    dateHeader[0].classList.add("bg-ganyu-light-red");
    dateHeader[0].style.borderColor = "white";

    // Change main container color
    mainContainer[0].classList.remove("bg-wanderer-light-purple");
    mainContainer[0].classList.add("bg-ganyu-pastel-blue");

    // Change background color of input rectangles
    for(var i = 0; i < inputRectangles.length; i ++){
        inputRectangles[i].classList.add("bg-ganyu-light-yellow");
        inputRectangles[i].classList.remove("bg-wanderer-beige");
    }  

    // Change CSS image source to Ganyu Chibi
    chibiImages[0].src="/images/ganyu-chibi-4.png";
    chibiImages[1].src="/images/ganyu-chibi-3.png";
    chibiImages[2].src="/images/ganyu-chibi-5.png";

    // Change theme to ganyu colored background
    for(var i = 0; i < menuHeaders.length; i ++){
        menuHeaders[i].classList.remove("bg-wanderer-teal");
        menuHeaders[i].classList.add("bg-ganyu-dark-blue");
    }

      // Change footer
      footer[0].classList.add("bg-ganyu-dark-blue");
      footer[0].classList.remove("bg-wanderer-teal");

      // Change body
      body[0].classList.add("bg-ganyu-dark-blue");
      body[0].classList.remove("bg-wanderer-teal");
      
};  

function wandererTheme(){
    currentTheme = "wanderer";

    // Change to a random Wanderer Quote
    var randNum = Math.floor(Math.random() * wandererQuotes.length);
    characterQuote[0].innerHTML = wandererQuotes[randNum];  
    characterQuote[0].classList.add("text-wanderer-royal-blue");
    characterQuote[0].classList.remove("text-ganyu-light-red");
   
    // Change color of date header
    dateHeader[0].classList.remove("bg-ganyu-light-red");
    dateHeader[0].classList.add("bg-wanderer-royal-blue");
    dateHeader[0].style.borderColor = "white";

    // Change main container color
    mainContainer[0].classList.remove("bg-ganyu-pastel-blue");
    mainContainer[0].classList.add("bg-wanderer-light-purple");

    // Change background color of input rectangles
    for(var i = 0; i < inputRectangles.length; i ++){
        inputRectangles[i].classList.add("bg-wanderer-beige");
        inputRectangles[i].classList.remove("bg-ganyu-light-yellow");
    }  

    // Change CSS image source to Wanderer Chibi
    chibiImages[0].src="/images/wanderer-chibi-1.png";
    chibiImages[1].src="/images/wanderer-chibi-2.png";
    chibiImages[2].src="/images/wanderer-chibi-3.png";

    // Change Menu headers
    for(var i = 0; i < menuHeaders.length; i++){
        menuHeaders[i].classList.add("bg-wanderer-teal");
        menuHeaders[i].classList.remove("bg-ganyu-dark-blue");
    }

    // Change footer
    footer[0].classList.add("bg-wanderer-teal");
    footer[0].classList.remove("bg-ganyu-dark-blue");

    // Change body  
    body[0].classList.add("bg-wanderer-teal");
    body[0].classList.remove("bg-ganyu-dark-blue");  
};  

function updateTheme(){
    if( currentTheme === "ganyu" ){
        ganyuTheme();
    }else if( currentTheme === "wanderer"){
        wandererTheme();
    }
}