function genProblem() {
    var a = Math.floor(Math.random()*10);
    var b = Math.floor(Math.random()*10);
    rightSolution = a + b;
    document.getElementById('id_problem').innerHTML = a + "+" + b;
    }

function ckAnswer() {
    var answer = document.getElementById('id_answer').value;
    if (answer == rightSolution) {
        //document.getElementById('id_systemComment').innerHTML="<p class = 'green'>YES</p>";
        document.getElementById('id_systemComment').innerHTML="YES";
        }
    else {
        //document.getElementById('id_systemComment').innerHTML="<p class = 'red'>sorry.. no</p>";
        document.getElementById('id_systemComment').innerHTML="sorry... no";
        }
    }


function setTimer() {
    var timeLeft = timeToAnswer;
    var myInterval = 1000;
    setInterval(ckTimeIsUp(),myInterval);
    }

function wallClock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    }


function ckTimeIsUp() {
    while ( gTimeLeft > 0 ) {
        document.getElementById('id_timeleft').innerHTML = gTimeLeft;
        gTimeLeft--;
        if ( gTimeleft <=  0 ) {
            ckAnswer();
            }
        }
    }

/// --- (start) imported funcs sleep,demo -----
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/// --- (end) imported funcs sleep,demo -----


// --- global variables ---
var timeToAnswer;
var gTimeLeft;
var rightSolution;
var TimedOut;

// --- init ---
function init() {
   var timeToAnswer = 5;
   var gTimeLeft = 5;
   var rightSolution = "";
   var TimedOut = 0;
   }


// --- main ---
async function main() {
    timedOut = 0;
    gTimeLeft = 5;
    genProblem();
    setTimer();
    while ( 1 == 1 ) {

        await sleep(2000);
        var timedOut = ckTimeIsUp();
        if ( timedOut == 1 ) {
            ckAnswer();
            }
        }
    }
