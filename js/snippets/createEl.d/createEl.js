// ---- createEl.js ----
// @@TODO:OPTIE later ogeven *welk* element je wilt hebben, content vh el voorlopig static (1text,1img,..)


var arrayAnimals = [
    "dog","cat","owl","horse","cow","mouse","mosquito","bat","donkey","monkey","bird"
]


var arrayAnimals = [
    "dog","owl"
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
        // document.getElementById("id_status").innerHTML = "no more animals left";
        flashStatus("no more animals left");
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


function flashStatus(textString) {
    document.getElementById("id_status").innerHTML = textString;
    setInterval(clearStatus(),3000);
}


function clearStatus() {
    document.getElementById("id_status").innerHTML = "";
}


function randomAnimal() {
    var rNumber = Math.floor(Math.random() * arrayAnimals.length);
    var rAnimal = arrayAnimals[rNumber];
    arrayAnimals.splice(rNumber,1);     // remove entry from array
    return rAnimal;
}
