
cset = ["blue", "green", "red", "pink", "purple", "yellow", "black", "magenta"];



function createEl() {
    // nog te bouwen. Nu eerst voor Victor iets bouwen.
}

function hideEl(id) {
    document.getElementById(id).style.display = "none";
}


function showEl(id) {
    document.getElementById(id).style.display = "block";
}


function removeEl(id) {
    // @@TODO: idee: groter/groot aantal els maken, en degene waar je op klikt verdwijnt.
    //  bv. je kan een tekening (bv. letter 'A' of atari logo)  nabouwen door els weg te gooien
    var el = document.getElementById(id);
    el.parentNode.removeChild(el);
}


function btnBecomesImg() {
    // first, appendChild, then rm org element. This way, we have something to refer to.
    var el = document.getElementById("id_snickers");
    var snickerimg="<img src='realSnickers.jpeg' alt='realSnickers'></img>";
    el.parentNode.appendChild(snickerimg);
    el.parentNode.removeChild(el);
}


// function mkTable() {
//     /// idee: dat je bv. atari logo of letter A nabouwt door elementen te removen, \
//     ///    ... hierna kijkt js of je zelfde bouwde als het voorbeeld.
//     var i, row;
//     var rowmax = 8;
//     var columnmax = 8;
//     for (row = 0; row < rowmax; row++) {
//         for (column = 0; column < columnmax; column++) {
//             i = (row * columnmax) + column;
//             /// hier element=char plaatsen
//             }
//             houseString = ArrayToString(house); // expensive AND inside a loop: @@TODO:make func more efficient
//         }
//         houseString = houseString + " <br>  ";
//         }
//     }
// }


function randomColor(id) {
    rcolor = Math.floor(Math.random() * cset.length);
    document.getElementById(id).style.color = cset[rcolor];
}


function ckEmptyInput(id) {
    if (document.getElementById(id).value.length == 0) {
        alert("Please provide value for field");
        // @@TODO: nog aanwijzen *welk* field, kleur rood, pijl erbij, ..
        return false;
    } else {
        return true;
    }
}


function randomImage() {
    var nbutton = document.getElementById('id_nbutton').value;
    try {
        ckEmptyInput('id_nbutton');
    } catch (err) {
        document.getElementById('id_err_output').innerHTML = err.message;
    } finally {
        ;
        // alert will popup after.. @@TODO: invullen na *wat* // alert('finally: randomImage run completed. With or without error');
    }
    bColor = Math.floor(Math.random() * nbutton);
    document.getElementById('id_clickme').src = "assets/clickMe" + bColor + ".jpg";
}



function reloadDoc() {
    location.reload();
}


function eloqButton() {
    // var button = document.querySelector("button"); // functie werkt NIET bij querySelector => ?omdat meerdere buttons onscreen?
    var button = document.getElementById('id_eloq');
    button.addEventListener("click", function() {
        alert("eloqButton: button clicked.");
    });
}

function weg() {
    blah;
    }
