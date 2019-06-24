function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// --- generate images ---
var i;
var imgstring=""
for (i=1 ; i<54 ; i++) {
   imgstring=imgstring+"<img src=\"carddeck/"c" + arr[$i] + ".png"\" alt=\"speelkaart\" width=\"11%\">  ";
   }

// @@ niet hier? document.write(imgstring);
// @@ niet hier? document.getElementById("carddeck").innerHTML=imgstring;
