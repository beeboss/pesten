
var carddeck=["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30","c31","c32","c33","c34","c35","c36","c37","c38","c39","c40","c41","c42","c43","c44","c45","c46","c47","c48","c49","c50","c51","c52","c53"];

function randomCard1() {
   var image = document.getElementById('card1');
   var willekeurig=Math.floor(1+Math.random()*28);
   image.src="./carddeck/c"+willekeurig+".png";
}

function randomCard2() {
   var image = document.getElementById('card2');
   var willekeurig=Math.floor(1+Math.random()*28);
   image.src="./carddeck/c"+willekeurig+".png";
}

function randomCard3() {
   var image = document.getElementById('card3');
   var willekeurig=Math.floor(1+Math.random()*28);
   image.src="./carddeck/c"+willekeurig+".png";
}

function randomCard4() {
   var image = document.getElementById('card4');
   var willekeurig=Math.floor(1+Math.random()*28);
   image.src="./carddeck/c"+willekeurig+".png";
}
