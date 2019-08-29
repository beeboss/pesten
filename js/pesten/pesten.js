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
        // @@ ?wat is de functie hiervan nog, nu ArrayToString er is?
        // je kan ook doen, ipv de "if..." : user=nextup, maar dan op end blokje vaststellen wie cur player is
        if ( user == "you" ) {
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
        document.getElementById("id-nextup").innerHTML = "<mark>nextup: " + nextup + "</mark>";
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


    function buildHandString() {
        if ( user == "igor" ) {
           igHandString = ArrayToString(ighand);
           document.getElementById("id-ighand").innerHTML=igHandString;
           document.getElementById("id-debug-igor").innerHTML = "<mark>igor: " + ighand + "</mark>";
           }
        else  {           // user == you
           yourHandString = ArrayToString(yourhand);
           document.getElementById("id-yourhand").innerHTML=yourHandString;
           document.getElementById("id-debug-you").innerHTML = "<mark>you: " + yourhand + "</mark>";
           }
        }


    function buildTable() {
        onTableString = ArrayToString(ontable);
        document.getElementById("id-ontable").innerHTML = onTableString;
        document.getElementById("id-debug-ontable").innerHTML = "<mark>[ontable:" + ontable + "]</mark>";
        }


    function ckHouseEmpty() {
        if (house.length == 0) {
           document.getElementById("comment").innerHTML = "<mark>no cards left in house</mark>";
           return;
           }  // @@ als de 'if' niet hit, moet je ook code hebben (of ';'). ombouwen graag.
        }


    function userTakeCard() {
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
	        document.getElementById("last").innerHTML = "<mark>last: " + altName + "</mark>";
            return altName;
            }


    function igorSpeak() {
	    document.getElementById("id-igorsays").innerHTML = "<mark>igor: " + igorsays + "</mark>";
	    igorsays="";    // reset
        }


    function takeSequence() {
        switchUser();
        userTakeCard();
	    descCard(curhand[(curhand.length-1)]);
        buildHandString();
        buildHouseString();
        igorSpeak();
        }


    function userSelectCard(e) {
        document.getElementById("id-yourhand").addEventListener("click", function(e) {
            // e.target will be the item that was clicked on
	        //park: !geeft probleem met de ontable dubbele kaarten! // e.target.style.opacity = "0.35";
	        // @@werktniet setTimeout(cardToTable(e.target.),140);

	        yourhand.splice(yourhand.indexOf(e.target.id), 1);
	        buildHandString();
            // reset index for card that got thrown on-table:
            //wordt al afgehandeld in ArrayToString; index moet via js worden bepaald:// e.target.index = ontable.length;
	        ontable.push(e.target.id);
	        buildTable();
            })
        }
