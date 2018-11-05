var cardImages = ["http://mythicspoiler.com/ema/cards/vampirictutor.jpg", "http://mythicspoiler.com/ema/cards/jacethemindsculptor.jpg"];
var cardCount = cardImages.length;
var cardLocation = document.getElementsByClassName('cardLayout');

var showTheCards = function() {
for (var i=0; i<cardCount; i++) {
    	document.write('<img src="'+cardImages[i]+'"/>');
  	}
}
