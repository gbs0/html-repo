const cards = document.querySelectorAll('.element-card');

function flipCard() {
	this.classList.toggle('flip');
}

// Operations in array
// cards.for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

cards.forEach(card => card.addEventListener('click', flipCard));
