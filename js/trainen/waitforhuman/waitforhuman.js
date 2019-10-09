// === waitforhuman.js ===

// @@TODO: ms kan ik iedere key opvangen en ze als chocolade letters weergeven #sinterklaas

function loopArrayAsync(ar, callback) {
    var index;

    index = 0;
    humanString = "";
    loop();

    function loop() {
        if (index < ar.length) {
            humanString = humanString + (ar[index++]) + " ";
            // set a timeout to keep cpu cool
            setTimeout(loop, 33);
            document.getElementById("id_humanstring").innerHTML = humanString;
        }
        else {
            callback();
        }
    }
}

function init() {
    document.getElementById("id_instruction").innerHTML = "Please type 5 words and end with a '.'";
    document.getElementById("id_jobstatus").innerHTML = "busy..";
}


function getWord() {

    // get input word-by-word
}

function countWords() {
    // counts/checks if user actually typed requested word count
}

function myLoop() {

    loopArrayAsync(a,
                   function() {
                       document.getElementById("id_jobstatus").innerHTML = "(ok) job done";
                   })
}


function main() {
    init();
    myLoop();
}
