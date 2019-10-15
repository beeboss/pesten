// ---- callback_compilation.js ----

function cb1() {
    var friends = ["Mike", "Stacy", "Andy", "Rick"];
    friends.forEach(function (eachName, index) {
        document.getElementById("id_person").innerHTML = eachName;

    });
}




function createEl(elType) {
    var el = document.createElement(elType);
}
