    function ObjCard(imgSrc, index, id, alt, width) {
	;
	}


    function createDeck() {
	for (i=0 ; i < ncards ; i++) {
	    var card[i] = new ObjCard({
		imgSrc: "carddeck/c" + i + ".png",
	    index: null,
		id: i;
		width: defCardWidthPerc + "%";
		});


    function convertToString(tmpArray) {
	var i;
	var handString="";
	var cardString="";
	for (i=0 ; i < tmparray.length ; i++) {
	    altName = descCard(tmpArray[i]);
	    cardString = "<img src=\"carddeck/" + tmpArray[i] + ".png\" index="+ i + " id="+ tmpArray[i] + "  alt=\"" + altName + "\" width='8%'></img>"
