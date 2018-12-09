'use strict';
(function(){ 

	let mealTemplate = document.getElementById('meal-template').innerHTML;
	let reciptTemplate = document.getElementById('recipt-template').innerHTML;
	let carousel = document.getElementById('carousel');
	let recipt = document.getElementById('recipt');

	Mustache.parse(mealTemplate);
	Mustache.parse(reciptTemplate);

	let mealData = 
					[
						{	
							title: 'kurczaki w panierce',
							image: 'images/kurczakimin.jpg'
						},
						{	
							title: 'quesadilla',
							image: 'images/quesadillamin.jpg'
						},
						{	
							title: 'zapiekane pieczarki',
							image: 'images/pieczarkimin.jpg'
						},
						{	
							title: 'pizzerinki',
							image: 'images/pizzerinkimin.jpg'
						},
						{	
							title: 'zawijańce z tortilli',
							image: 'images/zawijancemin.jpg'
						}						
					];

	let reciptData = 
					[
						{	
							id: 0,
							title: 'kurczaki w panierce'
						},
						{	
							id: 1,
							title: 'quesadilla'
						},
						{	
							id: 2,
							title: 'zapiekane pieczarki'
						},
						{	
							id: 3,
							title: 'pizzerinki'
						},
						{	
							id: 4,
							title: 'zawijańce z tortilli'
						}	
					];
		
	for(let i=0; i<mealData.length; i++) {
		let generatedMeal = Mustache.render(mealTemplate, mealData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMeal);
	}

	for(let i=0; i<reciptData.length; i++) {
		let generatedRecipt = Mustache.render(reciptTemplate, reciptData[i]);
		recipt.insertAdjacentHTML('beforeend', generatedRecipt);
	}



})();

const carousel = document.querySelector('.carousel');

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

flkty.on('change', function(index){
	for(let i=0; i<recipes.length; i++){
			recipes[i].hidden = true;
		}
	recipes[index].hidden = false;
});