// === waitforteletype.js ===

const BUSYSTRING = "busy..";

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
    document.getElementById("id_jobstatus").innerHTML = BUSYSTRING ;
    document.getElementById("id_comment").innerHTML = "";
}


function housekeeping() {
    document.getElementById("id_comment").innerHTML = "";
}


function myLoop() {
    var a = ["Yes", "," , "I", "think", "this", "will", "work", "," , "Mr.", "Watson", "."];
    loopArrayAsync(a,
                   function() {
                       document.getElementById("id_jobstatus").innerHTML = "(ok) job done";
                       housekeeping();  // @@ is this the best place to put housekeeping?
                   })
}


function ckAlreadyRunning() {
    if ( document.getElementById("id_jobstatus").innerHTML.match(BUSYSTRING)) {
        document.getElementById("id_comment").innerHTML = "Already busy";
        return 1;
    }
    else {
        return 0;
    }
}


function main() {
    var busy = ckAlreadyRunning();
    if ( busy == 0 ) {
        init();
        myLoop();
    }
    else {
        ; // do nothing
    }
}
