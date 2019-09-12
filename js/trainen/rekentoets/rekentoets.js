var rightSolution="";

function genProblem() {
    var a = Math.floor(Math.random()*10);
    var b = Math.floor(Math.random()*10);
    rightSolution = a + b;
    document.getElementById('id_problem').innerHTML = a + "+" + b;
    }

function ckUserSolution() {
    var userSolution = document.getElementById('id_userSolution').value;
    if (userSolution == rightSolution) {
        document.getElementById('id_systemComment').innerHTML="YES";
        }
    else {
        document.getElementById('id_systemComment').innerHTML="sorry.. no";
        }
    }
