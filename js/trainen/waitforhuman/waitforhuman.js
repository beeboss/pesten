// === waitforhuman.js ===

// @@TODO: ms kan ik iedere key opvangen en ze als chocolade letters weergeven #sinterklaas

var ArraySentences = [
    "The lazy fox jumped over the quick dog.",
    "I fear too early, for my mind misgives.",
    "He's madder than Mad Jack McMad, the winner of last year's Mr Madman competition.",
    "You see, but you do not observe."
]


function ckArrayEmpty() {
    if ( ArraySentences.length == 0 ) {
        return 1;
    }
}


function displayRandomSentence() {
    var rNumber = Math.floor(Math.random() * ArraySentences.length);
    var rSentence = ArraySentences[rNumber];
    document.getElementById("id_sentence").innerHTML = rSentence;
    ArraySentences.splice(rNumber,0);
}


function loopArrayAsync() {
    var index;
    index = 0;
    humanString = "";
    loop();

    function loop() {
        jobstodo:
        if ( ckArrayEmpty() == 1 ) {
            break jobstodo;
        }
        else {
            displayRandomSentence();
            getChar();
            /// if (index < ar.length) {
            humanString = humanString + (ar[index++]) + " ";
            // set a timeout to keep cpu cool
            setTimeout(loop, 33);

            document.getElementById("id_humanstring").innerHTML = humanString;
        }
    }
}


function init() {
    document.getElementById("id_jobstatus").innerHTML = "waiting..";
}


function getChar() {
    document.getElementById("id_humanstring").addEventListener("keypress", function(e) {
        // e.target will be the item that was catched
        scanChar = e.key;
        if (scanChar === "Enter") {
            ;   // inhibit ENTER so it does nothing
        }
        else if (scanChar === "F4") {
            abort();
        }
        else {
            document.getElementById("id_keyHitFeedback").innerHTML = scanChar;
            if (scanChar === ".") {
                getLaptime();
                waitHumanReadyForNextSentence();
            }
        }
    });
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
    loopArrayAsync();
    ////////////////////////////// myLoop();
}
