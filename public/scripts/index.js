// Run after all element in the web page have loaded
$(document).ready(function(){ 
    ganyuTheme();
});

/*************************************************************************/
/********                      Variables                         *********/
/*************************************************************************/
const chibiImages = document.getElementsByClassName("chibi-character");
var currentTheme = "ganyu";
const ganyuQuotes = [
    `"Next on the agenda..."`,
    `"We're way behind schedule..."`,
    `"Healthy body, healthy mind..."`, 
    `"I'm a little low on energy."`, 
    `"Time to begin work?"`
];
const wandererQuotes = [
    `"Huh. How irritating."`, 
    `"Cry louder!"`, 
    `"You dare to gaze upon me!?"`, 
    `"...You're dead."`, 
    `"Prepare yourself for punishment."`, 
];

/*************************************************************************/
/********                      Functions                         *********/
/*************************************************************************/
function editItem(id){
    // Hide display
    $("#delete-btn-" + id).hide(1);
    $("#edit-btn-" + id).hide(1);
    $("#item-display-" + id).hide(1);
    // Show edit inputs
    $("#edit-input-" + id).show(300, function(){
        $("#done-btn-" + id).show(16);
    }); 
    $("#done-btn-" + id).css("border-radius", "20px 0 0 20px");
    $("#edit-input-" + id ).each(function () {
        this.style.setProperty("border-radius", "0 20px 20px 0",  "important");
    });
}
function ganyuTheme(){
    currentTheme = "ganyu";
    // // Character Quote
    var randNum = Math.floor( Math.random() * ganyuQuotes.length );
    $(".character-quote").text(ganyuQuotes[randNum]);
    // Chibi Images
    chibiImages[0].src="/images/ganyu-chibi-4.png";
    chibiImages[1].src="/images/ganyu-chibi-3.png";
    chibiImages[2].src="/images/ganyu-chibi-5.png";
    // TODO: Character Button (make it grow larger to show what theme is currently used)
    // $(".ganyu-btn").addClass()
};  
function wandererTheme(){
    // // Character Quote
    var randNum = Math.floor( Math.random() * wandererQuotes.length );
    $(".character-quote").text(wandererQuotes[randNum]);
    // Chibi Images
    chibiImages[0].src="/images/wanderer-chibi-1.png";
    chibiImages[1].src="/images/wanderer-chibi-2.png";
    chibiImages[2].src="/images/wanderer-chibi-3.png";  
    // TODO: Character Button (make it grow larger to show what theme is currently used)
    // $(".wanderer-btn").addClass()
};  

// function to set a given theme/color-scheme
function setTheme(themeName) {
    switch(themeName){
        case 'theme-ganyu-light':
            ganyuTheme();
            break;
        case 'theme-wanderer-light':
            wandererTheme();
            break;
    }
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
(function () {
   if (localStorage.getItem('theme') === 'theme-ganyu-light') {
       setTheme('theme-ganyu-light');
       ganyuTheme();
   } else if(localStorage.getItem('theme') === 'theme-wanderer-light') {
       setTheme('theme-wanderer-light');
       wandererTheme();
   }
})();