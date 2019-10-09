// === waitforhuman.js ===

var boolDone = "no";

function loopArrayAsync(ar, callback) {
    var index;

    index = 0;
    miepString = "";
    loop();

    function loop() {
        if (index < ar.length) {
            miepString = miepString + (ar[index++]) + " ";
            setTimeout(loop, 1000);
            document.getElementById("id_miepstring").innerHTML = miepString;
        }
        else {
            callback();
        }
    }
}

function init() {
    document.getElementById("id_jobstatus").innerHTML = "busy..";
}


function myLoop() {
    var a = ["Yes", "," , "I", "think", "this", "will", "work", "," , "Mr.", "Watson", "."];
    loopArrayAsync(a,
                   function() {
                       document.getElementById("id_jobstatus").innerHTML = "(ok) job done";
                   })
}


function main() {
    init();
    myLoop();
}
