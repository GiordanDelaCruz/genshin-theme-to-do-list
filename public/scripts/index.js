// Get reference to all objects
const dateHeader = document.getElementsByClassName("date-header");
const menuHeaders = document.getElementsByClassName("menu-header");
const chibiImages = document.getElementsByClassName("chibi-character");
const mainContainer = document.getElementsByClassName("main-container");

function ganyuTheme(){

    // Change CSS image source to Ganyu Chibi
    chibiImages[0].src="/images/ganyu-chibi-4.png";
    chibiImages[1].src="/images/ganyu-chibi-3.png";
    chibiImages[2].src="/images/ganyu-chibi-5.png";

    // Change theme to ganyu colored background
    for(var i = 0; i < menuHeaders.length; i ++){
        menuHeaders[i].classList.add("bg-ganyu-dark-blue");
        menuHeaders[i].classList.remove("bg-wanderer-grey-blue-1");
    }

    // Change color of date header
    dateHeader[0].classList.remove("bg-wanderer-grey-blue-2");
    dateHeader[0].classList.add("bg-ganyu-light-red");

    // Change main container color
    mainContainer[0].classList.remove("bg-wanderer-pastel-blue");
    mainContainer[0].classList.add("bg-ganyu-pastel-blue");
};  

function wandererTheme(){

    // Change CSS image source to Ganyu Chibi
    chibiImages[0].src="/images/wanderer-chibi-1.png";
    chibiImages[1].src="/images/wanderer-chibi-2.png";
    chibiImages[2].src="/images/wanderer-chibi-3.png";

    // Change theme to ganyu colored background
    for(var i = 0; i < menuHeaders.length; i ++){
        menuHeaders[i].classList.add("bg-wanderer-grey-blue-1");
        menuHeaders[i].classList.remove("bg-ganyu-dark-blue");
    }

    // Change color of date header
    dateHeader[0].classList.remove("bg-ganyu-light-red");
    dateHeader[0].classList.add("bg-wanderer-grey-blue-2");

    // Change main container color
    mainContainer[0].classList.remove("bg-ganyu-pastel-blue");
    mainContainer[0].classList.add("bg-wanderer-pastel-blue");
};  