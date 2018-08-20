const cards = document.querySelectorAll('.each-element-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	if (this == firstCard) return;

	this.classList.add('flip');
} else {
	// First Click
	hasFlippedCard = true;
	firstCard = this;
} else {
	// second click
	hasFlippedCard = false;
	secondCard = this;

	console.log(firstCard.dataset.framework);
	console.log(secondCard.dataset.framework);
}

// Operations in array
// cards.for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

cards.forEach(card => card.addEventListener('click', flipCard));
