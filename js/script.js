let mealTemplate = document.getElementById('meal-template').innerHTML;
let reciptTemplate = document.getElementById('recipt-template').innerHTML;
let carousel = document.getElementById('carousel');
let reciptList = document.getElementById('recipt-list');

let recipes = [];

Mustache.parse(mealTemplate);
Mustache.parse(reciptTemplate);

'use strict';
(function(){ 

	addDataToCarousel();
	addReciptsToReciptList();

})();

const flkty = new Flickity(carousel, {
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

addReciptToTable();

recipes[0].hidden = false;

flkty.on('change', function(index){
	hiddeAllRecipt();
	recipes[index].hidden = false;
});

function addDataToCarousel() {
		for(let i=0; i<mealData.length; i++) {
		let generatedMeal = Mustache.render(mealTemplate, mealData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMeal);
	}
}

function addReciptsToReciptList() {
	for(let i=0; i<reciptData.length; i++) {
		let generatedRecipt = Mustache.render(reciptTemplate, reciptData[i]);
		reciptList.insertAdjacentHTML('beforeend', generatedRecipt);
	}
}

function hiddeAllRecipt() {
	for(let i=0; i<recipes.length; i++){
		recipes[i].hidden = true;
	}
}

function addReciptToTable() {
	for(let i=0; i<5; i++){
		let recipe = document.getElementById(i);
		recipes.push(recipe);
	}
}
