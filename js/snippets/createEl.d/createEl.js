// ---- createEl.js ----
// @@TODO:OPTIE later ogeven *welk* element je wilt hebben, content vh el voorlopig static (1text,1img,..)


var arrayAnimals = [
    "bat","donkey","rabbit","bird"
]


function createEl(elType) {
    if  ( ckAnimalsLeft())  {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(randomAnimal());
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById("id_hook");
        document.body.insertBefore(newDiv,currentDiv);
    }
    else {
        document.getElementById("id_status").innerHTML = "no more animals left";
        /// flashStatus("no more animals left");
        setTimeout(function(){ document.getElementById("id_status").innerHTML = ""; }, 800); // func *moet* inline
    }
}


function ckAnimalsLeft() {
    if ( arrayAnimals.length == 0 ) {
        return 0;
    }
    else {
        return 1;
    }
}


// ** funcs hieronder werken niet als ze callee zijn binnen een setTimeout()
// function flashStatus(textString) {
//     document.getElementById("id_status").innerHTML = textString;
//     setTimeout(clearStatus(),3000);
// }
//
//
// function clearStatus() {
//     document.getElementById("id_status").innerHTML = "";
// }


function randomAnimal() {
    var rNumber = Math.floor(Math.random() * arrayAnimals.length);
    var rAnimal = arrayAnimals[rNumber];
    arrayAnimals.splice(rNumber,1);     // remove entry from array
    return rAnimal;
}
