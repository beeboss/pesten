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


var arr=["c1.png","c2.png","c3.png","c4.png","c5.png","c6.png","c7.png","c8.png","c9.png","c10.png","c11.png","c12.png","c13.png","c14.png","c15.png","c16.png","c17.png","c18.png","c19.png","c20.png","c21.png","c22.png","c23.png","c24.png","c25.png","c26.png","c27.png","c28.png","c29.png","c30.png","c31.png","c32.png","c33.png","c34.png","c35.png","c36.png","c37.png","c38.png","c39.png","c40.png","c41.png","c42.png","c43.png","c44.png","c45.png","c46.png","c47.png","c48.png","c49.png","c50.png","c51.png","c52.png","c53.png"];
arr = shuffle(arr);

document.write(arr);
