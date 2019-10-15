// ---- createEl.js ----

// @@TODO: werkend krijgen
// @@TODO: later ogeven *welk* element je wilt hebben, content vh el voorlopig static (1text,1img,..)

function createEl(elType) {
    var mig = document.createTextNode("mig-was-here");
///=========
    if ( elType == "div" ) {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode("created TextNode");
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById("id_hook");
        document.body.insertBefore(newDiv,currentDiv);

    }
}
