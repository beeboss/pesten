// === pesten-init-n-functions ===
    // --- init ---
    var card = [];
    var deck = [];
    // @@TODO: array voor house bouwen: for/while loop mk, de 'c' ervoor plakken met een map ofzo
    var house=["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30","c31","c32","c33","c34","c35","c36","c37","c38","c39","c40","c41","c42","c43","c44","c45","c46","c47","c48","c49","c50","c51","c52","c53","c54"];
    // var house=["c1","c2"];
    var cardNamesNL=["aas","2","3","4","5","6","7","8","9","10","boer","vrouw","heer"];
    var cardNamesRU=["туз","2","3","4","5","6","7","8","9","10","валет","дама","король"];
    var suitlist=["schoppen","harten","klaveren","ruiten"];
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
    var comment="";
    var user="you";
    var nextup="you";
    var igorsays="";
    // ---
    var lastCard="-";
    var testString="<h1>ZZZZZZZZZZZZZZZZZZZ</h1>";


    // === user-defined vars ===
    defCardWidthPerc = 6;


    // === functions ===

/*    function buildDeck() {
        var i = 0;
        while ( i < 54 ) {
            house[i]="c" + i;
            i++;
            }
        }
*/

/*    function cardNames() {
        }
*/

    function updScreen() {
        document.getElementById("id-nextup").innerHTML = "nextup: " + nextup ;
        document.getElementById("id-comment").innerHTML = comment;
        document.getElementById("id-igorsays").innerHTML = "igor: " + igorsays ;
        document.getElementById("last").innerHTML = "last: " + altName ;

        document.getElementById("id-ighand").innerHTML = igHandString;
        document.getElementById("id-ontable").innerHTML = onTableString;
        document.getElementById("id-yourhand").innerHTML = yourHandString;
        document.getElementById("id-house").innerHTML = housestring;

        document.getElementById("id-debug-ontable").innerHTML = "[ontable:" + ontable + "]";
        document.getElementById("id-debug-igor").innerHTML = "igor: " + ighand ;
        document.getElementById("id-debug-you").innerHTML = "you: " + yourhand ;
        // reset values that are not updated with every move
	    igorsays="...";    // reset
        //----
        refreshHand();
        refreshTable();
        refreshHouse();
    }


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


    function switchUser(tmpUser) {
        if ( tmpUser == "you" ) {
            user = "igor";
            curhand = ighand;
            curHandString = igHandString;
            nextup = "you";
            return user;
            }
        else {
            user = "you";
            curhand = yourhand;
            curHandString = yourHandString;
            nextup = "igor";
            return user;
            }
        }


    function ckCardPlayable (cCard) {
        // topOfTable = ontable[(ontable.length - 1)];
        // mustBeSuit = topOfTable.suit;
        // mustBeNumber = topOfTable.rad;
        // wantToPlay = descCard[cCard];
        // document.getElementById('id_igor').innerHTML = "ckCardPlayable:returning 1 until this func works!!";
        return 1;
    }


    function actionPlayer(tmpUser) {
        if ( tmpUser == "igor") {
            // strategie igor: gooi "eerste-de-beste" kaart neer als dat volgens regels mag, heb je niks, koop "TopCard" kaart
            var i = 0;
            while (  i < ighand[(ighand.length-1)] ) {
                if ( ckCardPlayable[i] == 1 ) {
                    igorsays="I throw ighand[i]";
                    playCard(ighand[i]);
                    i++;
                    }
                }
                bCard = buyTopCard();
                igorsays="I buy a card ... :(";
                curhand.push(bCard);
            }
        else     // user == you
           // human *chooses* , either to drop a card, or to buy a card
           youTryHandCard();   // evListener should be reset,
           ;                   // buy-buttons are already available (don't need to be called here)
        }


    function youTryHandCard() {
         document.getElementById("id-yourhand").addEventListener("click", function(e) {
         // e.target will be the item that was clicked on

         mayBePlayed = ckCardPlayable(e.target.id);
         if ( mayBePlayed == 0 ) {
             comment = "not a valid card";
             }
         else {
             yourhand.splice(yourhand.indexOf(e.target.id), 1);
             playCard(e.target.id);
             }})
         }


    function playCard(cCard) {
        ontable.push(cCard);
        topOfTable = cCard;
        }


    function refreshHouse() {
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
                    housestring= ArrayToString(house);   // expensive AND inside a loop: @@TODO:make func more efficient
                    }
                    housestring = housestring + " <br>  ";
                }
            }
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
           }
        else  {           // user == you
           yourHandString = ArrayToString(yourhand);
           }
        }


    function refreshTable() {
        onTableString = ArrayToString(ontable);
        }


    function ckHouseEmpty() {
        if (house.length == 0) {
           document.getElementById("id-comment").innerHTML = "no cards left in house";
           return;
           }  // @@ als de 'if' niet hit, moet je ook code hebben (of ';'). ombouwen graag.
        }


    function buyRandomCard() {
        ckHouseEmpty();
        // @@TODO: optie mk 2 speelwijzen: je krijgt bovenste kaart v house, of random kaart v house)
        var willekeurig=Math.floor(Math.random()*house.length);
        var cardcontent = house[willekeurig];
        house.splice(willekeurig,1);
        curhand.push(cardcontent);
        }


    function buyTopCard() {
        house.splice(0,1);
        curhand.push(cardcontent);
        }


/*    function desc2(cCard) {
     	var serial = cCard.replace("c","");
		var altName="";
        var suitNumber = Math.floor(serial/13);
        var suit = suitlist.suitNumber;
        var value = serial - (suitNumber*13);
        // igorsays = cardNamesRU.value;
        }
*/

    function descCard(cCard) {
     	var serial = cCard.replace("c","");
		var tmpName="";
		var suit="";
        if ( serial == 52 || serial == 53 ) {
            tmpName = "joker";
            last = tmpName;
            return tmpName;
            }
		// -- non-joker cards
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
      	       }
	    tmpName = suit + " " + value;
	    last = tmpName;
        return tmpName;
        }


    function takeSequence() {
        switchUser(user);
        actionPlayer(user);
        updScreen();
        }


    // ---------------
    // --- exports ---
//    exports.switchUser = switchUser;
//    exports.descCard = descCard;
