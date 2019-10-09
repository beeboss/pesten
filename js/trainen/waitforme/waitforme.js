// === waitForMe.js ===

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
            document.getElementById("id_jobstatus").innerHTML = "(ok) job done";
            // @@kandidaat-weg:niks gekoppeld### callback();
        }
    }
}

function init() {
    document.getElementById("id_jobstatus").innerHTML = "busy..";
}


function myLoop() {
    var a = ["five", "six", "seven"];
    loopArrayAsync(a,
                   function() {
                       boolDone = "yes";
                       document.getElementById("id_jobstatus").innerHTML = boolDone;
                   })
}

function main() {
    init();
    myLoop();
}
