const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let newWords = "";
let randomWords = "";
let play = false;
let sWords = ["soup", "fruit", "onion", "fish", "strawberry", "grape", "carrot", "apple", "cake", "steak", "salad", "chicken", "potato", "mango", "chips", "popcorn", "peanuts", "watermelon", "water", "cookie", "brownie", "bagel", "pizza", "salsa", "cheese", "eggs", "bacon", "candy", "olive", "cherry", "tomato", "bread", "orange", "lemon", "mustard", "coffee", "milk", "butter", "pepper", "pasta", "rice", "cereal", "salt", "honey", "garlic", "beans", "sugar", "lettuce", "ham", "pork", "crab", "shrimp", "turkey", "mushroom", "celery", "lime", "nuts", "pumpkin", "pecans", "lamb", "cream", "flour", "granola", "beef", "jerky", "seeds", "spices", "yogurt", "berries", "vegetable", "peas", "vinegar", "ginger", "chocolate", "pastry", "noodles", "yeast", "vanilla", "dough", "buttermilk", "batter", "caramel", "cornmeal", "crackers"];

const createNewWords = () => {
	let randomWord = Math.floor(Math.random() * sWords.length);
	let newWord = sWords[randomWord];
	return newWord;
}

const scramblewords = (arr) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		let temp = arr[i];
		let j = Math.floor(Math.random() * (i + 1));
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

btn.addEventListener('click', function () {
	if (!play) {
		play = true;
		btn.innerHTML = "Guess";
		guess.classList.toggle('hidden');
		newWords = createNewWords();
		randomWords = scramblewords(newWords.split("")).join("");
		msg.innerHTML = randomWords;
	} else {
		let tempWord = guess.value;
		if (tempWord === newWords) {
			play = false;
			msg.innerHTML = `It's correct. It is ${newWords}.`;
			btn.innerHTML = "Next Word";
			console.log("correct");
			guess.classList.toggle('hidden');
			guess.value = "";
		} else {
			msg.innerHTML = `It's incorrect. Guess again ${randomWords}.`;
			console.log("incorrect");
		}
	}
})