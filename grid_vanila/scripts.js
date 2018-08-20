const cards = document.querySelectorAll('.each-element-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	if (this === firstCard) return;

	this.classList.add('flip');

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;

		return;
	}

	//second click
	secondCard = this;
} 

// function unflipCards() {
// 	firstCard.classList.remove('flip');
// 	secondCard.classList.remove('flip');
// }



// Operations in array
// cards.for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

cards.forEach(card => card.addEventListener('click', flipCard));
