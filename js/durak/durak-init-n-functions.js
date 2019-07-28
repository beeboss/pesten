// === durak-init-n-functions ===
    // --- init ---
    var deck = [];
    var house=["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30","c31","c32","c33","c34","c35","c36","c37","c38","c39","c40","c41","c42","c43","c44","c45","c46","c47","c48","c49","c50","c51","c52","c53","c54"];
    //var house=["c1","c2","c3","c4"];
    var yourhand=[];
    var ighand=[];
    var curhand=[];
    var ontable=[];
    var yourHandString="";
    var igHandString="";
    var curHandstring=""
    var ontable="";
    // ---
    var user="you";
    var nextup="you";
    var igorsays="";
    // ---
    var lastCard="-";


    // --- classes ---
    class Card {
	constructor(cid, altName) {
	    this.cid = cid;
	    this.altName = altName;
	}
    }


    // --- build deck ---
    function buildDeck() {
	var i = 0;
        for ( ; i< deck.length ; i++ ) {
            deck[i].cid = i;
	    deck[i].altName = descCard(deck[i]);
	}
    }


    // --- functions ---
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


    function switchUser() {
        if ( user == "you" ) {
           // copy values back to player
           user = "igor";

           curhand = ighand;
           curHandString = igHandString;
           nextup = "you";
           }
       else {
           user = "you";
           curhand = yourhand;
           curHandString = yourHandString;
           nextup = "igor";
           }
       document.getElementById("id-nextup").innerHTML = "nextup: " + nextup;
    }


    function buildHousestring() {
        var housestring="";
        buildhouse: {
            var i, row;
            var rowmax=6;
            var columnmax=9;
            for (row=0; row < rowmax ; row++ ) {
                for (column = 0 ; column < columnmax ; column++ ) {
                    i = (row*columnmax)+column;
                    if (i >= house.length) break buildhouse;
                    altName = descCard(house[i]);
                    housestring=housestring+"<img src=\"carddeck/" + house[i] + ".png\"   alt=\"" + altName + "\" width='6%\'></img>  ";
                    }
                    housestring = housestring + " <br>  ";
            }

        }
        document.getElementById("house").innerHTML=housestring;
    }


    function buildHandstring() {
        var i;
        var newCardString;
        for (i=0 ; i < curhand.length ; i++) {
            altName = descCard(curhand[i]);
            newCardString = "<img src=\"carddeck/" + curhand[i] + ".png\" id="+ i + "  alt=\"" + altName + "\" width='8%'></img>"
            curHandString = curHandString + newCardString;
            }
        if ( user == "igor" ) {
           document.getElementById("id-ighand").innerHTML=curHandString;
           }
           else {
           document.getElementById("id-yourhand").innerHTML=curHandString;
           }
    }


    function ckHouseEmpty() {
       if (house.length == 0) {
          document.getElementById("comment").innerHTML = "no cards left in house";
          return;
          }
    }


    function dealCard() {
       ckHouseEmpty();
       var willekeurig=Math.floor(Math.random()*house.length);
       var cardcontent = house[willekeurig];
       house.splice(willekeurig,1);
       curhand.push(cardcontent);
       }


    function descCard(cCard) {
         var serial = cCard.replace("c","");
         var altName="";
         var suit="";
         // -- suit
         if (serial <= 13) { suit = "schoppen" ; }
         else if (serial <= 26) { suit = "harten" ; }
         else if (serial <= 39) { suit = "klaver" ; }
         else if (serial <= 52) { suit = "ruiten" ; }
         else { suit="joker" ;}
         // -- value
         var rad=(serial%13);
         switch(rad) {
             case 0:
                value = "heer" ;
                igorsays="король";
                break;
             case 1:
                value = "aas" ;
                igorsays="туз";
                break;
             case 11:
                value = "boer" ;
                igorsays="валет";
                break;
             case 12:
                value = "vrouw" ;
                igorsays="дама";
                break;
             default:
                value = rad ;
                igorsays="...";
         }
         altName = suit + " " + value;
         document.getElementById("last").innerHTML = altName;
    return altName;
    }


    function igormaysaysomething() {
	document.getElementById("id-igorsays").innerHTML = "igor: " + igorsays;
	igorsays="";    // reset
    }


    function takesequence() {
        switchUser();
        dealCard();
	descCard(curhand[(curhand.length-1)]);
        buildHandstring();
        buildHousestring();
        igormaysaysomething();
    }


    function userSelectCard() {
        document.getElementById("id-yourhand").addEventListener("click", function(e) {
            // e.target will be the item that was clicked on
            e.target.style.opacity = "0.35";
            document.getElementById("selectedId").innerHTML = descCard(yourhand[e.target.alt]);
	    /////// hierosetTimeout(cardToTable(e.target.),1400)
	    // ontable.push(yourhand[e.target]);
            })

    }


/*    function cardToTable() {
	ontable.push(
*/
