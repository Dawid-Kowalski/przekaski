'use strict';
(function(){ 

	let mealTemplate = document.getElementById('meal-template').innerHTML;
	let reciptTemplate = document.getElementById('recipt-template').innerHTML;
	let carousel = document.getElementById('carousel');
	let recipt = document.getElementById('recipt');

	Mustache.parse(mealTemplate);
	Mustache.parse(reciptTemplate);
		
	for(let i=0; i<mealData.length; i++) {
		let generatedMeal = Mustache.render(mealTemplate, mealData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMeal);
	}

	for(let i=0; i<reciptData.length; i++) {
		let generatedRecipt = Mustache.render(reciptTemplate, reciptData[i]);
		recipt.insertAdjacentHTML('beforeend', generatedRecipt);
	}

})();

const flkty = new Flickity(carousel, {
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

let recipes = [];

for(let i=0; i<5; i++){
	let recipe = document.getElementById(i);
	recipes.push(recipe);
}

recipes[0].hidden = false;

flkty.on('change', function(index){
	for(let i=0; i<recipes.length; i++){
			recipes[i].hidden = true;
		}
	recipes[index].hidden = false;
});