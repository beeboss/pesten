// === pesten-init-n-functions ===
    // --- init ---
    var card = [];
    var deck = [];
    var house=["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30","c31","c32","c33","c34","c35","c36","c37","c38","c39","c40","c41","c42","c43","c44","c45","c46","c47","c48","c49","c50","c51","c52","c53","c54"];
    // var house=["c1","c2"];
    var yourhand=[];
    var ighand=[];
    var curhand=[];
    var ontable=[];
    var topOfTable=[];
    var yourHandString="";
    var igHandString="";
    var curHandString=""
    var onTableString="";
    // ---
    var user="you";
    var nextup="you";
    var igorsays="";
    // ---
    var lastCard="-";
    var testString="<h1>ZZZZZZZZZZZZZZZZZZZ</h1>";

    // === user-defined vars ===
    defCardWidthPerc = 6;


    // === functions ===
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
            user = "igor";
            curhand = ighand;
            curHandString = igHandString;
            nextup = "you";
            actionIgor();
            }
        else {
            user = "you";
            curhand = yourhand;
            curHandString = yourHandString;
            nextup = "igor";
            youTryHandCard();
            }
        document.getElementById("id-nextup").innerHTML = "nextup: " + nextup ;
        }


    function ckCardPlayable (cCard) {
        topOfTable = ontable[(ontable.length - 1)];
        mustBeSuit = topOfTable.suit;
        mustBeNumber = topOfTable.rad;
        wantToPlay = descCard[cCard];
        document.getElementById('id_igor').innerHTML = "ckCardPlayable:returning 1 until this func works!!";
        return 1;
    }


    function actionIgor() {
        // strategie igor: gooi "eerste-de-beste" kaart neer als dat volgens regels mag, heb je niks, koop kaart
        var i = 0;
        while (  i < ighand[(ighand.length-1)] ) {
            if ( ckCardPlayable[i] == 1 ) {
                igorsays="I throw ighand[i]";
                buildHandString();
                playCard(ighand[i]);
                i++;
                }
            }
            bCard = buyCard();
            igorsays="I buy a card ... :(";
            curhand.push(bCard);
        }


    function youTryHandCard() {
         document.getElementById("id-yourhand").addEventListener("click", function(e) {
         // e.target will be the item that was clicked on

         mayBePlayed = ckCardPlayable(e.target.id);
         if ( mayBePlayed == 0 ) {
             document.getElementById("comment").innerHTML = "not a valid card";
             }
         else {
             yourhand.splice(yourhand.indexOf(e.target.id), 1);
             buildHandString();
             playCard(e.target.id);
             }})
        }


    function playCard(cCard) {
        ontable.push(cCard);
        topOfTable = cCard;
        refreshTable();
        }


    function buildHouseString() {
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
                    housestring= ArrayToString(house);
                    }
                    housestring = housestring + " <br>  ";
                }
            }
        document.getElementById("id-house").innerHTML=housestring;
        }


    function ArrayToString(tmpA) {
        var i;
        var tmpS="";
        var outS="";
        for (i=0 ; i < tmpA.length ; i++) {
            altName = descCard(tmpA[i]);
            //org:with [index] field //tmpS = "<img src=\"carddeck/" + tmpA[i] + ".png\" index="+ i + " id="+ tmpA[i] + "  alt=\"" + altName + "\" width='8%'></img>"
            tmpS = "<img src=\"carddeck/" + tmpA[i] + ".png\" id="+ tmpA[i] + "  alt=\"" + altName + "\" width='8%'></img>"
            outS = outS + tmpS;
            }
        return outS;
        }


    function refreshHand() {
        if ( user == "igor" ) {
           igHandString = ArrayToString(ighand);
           document.getElementById("id-ighand").innerHTML=igHandString;
           document.getElementById("id-debug-igor").innerHTML = "igor: " + ighand ;
           }
        else  {           // user == you
           yourHandString = ArrayToString(yourhand);
           document.getElementById("id-yourhand").innerHTML=yourHandString;
           document.getElementById("id-debug-you").innerHTML = "you: " + yourhand ;
           }
        }


    function refreshTable() {
        onTableString = ArrayToString(ontable);
        document.getElementById("id-ontable").innerHTML = onTableString;
        document.getElementById("id-debug-ontable").innerHTML = "[ontable:" + ontable + "]";
        }


    function ckHouseEmpty() {
        if (house.length == 0) {
           document.getElementById("comment").innerHTML = "no cards left in house";
           return;
           }  // @@ als de 'if' niet hit, moet je ook code hebben (of ';'). ombouwen graag.
        }


    function buyCard() {
        ckHouseEmpty();
        // @@TODO: optie mk 2 speelwijzen: je krijgt bovenste kaart v house, of random kaart v house
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
	        document.getElementById("last").innerHTML = "last: " + altName ;
            return altName;
            }


    function igorSpeak() {
	    document.getElementById("id-igorsays").innerHTML = "igor: " + igorsays ;
	    igorsays="";    // reset
        }


    function takeSequence() {
        switchUser();
        // @@TODO: player kan OFWEL card on table gooien OFWEL buyCard();
	    descCard(curhand[(curhand.length-1)]);
        refreshHand();
        buildHouseString();
        igorSpeak();
        }
