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
        for ( ; i < house.length ; i++ ) {
            deck[i] = new Card;
	    deck[i] = { cid: "c" + i, altName: descCard(deck[i]) };
	    //  deck[i].altName = descCard(deck[i]);
	}
    }
