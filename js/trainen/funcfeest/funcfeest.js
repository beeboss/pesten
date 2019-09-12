function hideEl(id) {
    document.getElementById(id).style.display = "none";
    }


function showEl(id) {
    document.getElementById(id).style.display = "block";
    }


function randomColor(id) {
    cset=["blue","green","red","pink","purple","yellow"];
    rcolor = Math.floor(Math.random()*cset.length);
    document.getElementById(id).style.color = cset[rcolor];
    }


function ckEmptyInput(id) {
    if (document.getElementById(id).value.length == 0) {
        alert("Please provide value for field");
        // @@TODO: nog aanwijzen *welk* field, kleur rood, pijl erbij, ..
        return false;
        }
    else {
        return true;
        }
    }


function randomImage() {
    var nbutton = document.getElementById('id_nbutton').value;
    try {
        ckEmptyInput('id_nbutton');
        }
    catch(err) {
        document.getElementById('id_err_output').innerHTML = err.message;
        }
    finally {
        alert('finally: randomImage run completed. With or without error');
        }
    bColor = Math.floor(Math.random() * nbutton);
    document.getElementById('id_clickme').src="assets/clickMe" + bColor + ".jpg";
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
