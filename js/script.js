'use strict';
(function(){ 

	let template = document.getElementById('template').innerHTML;
	let carousel = document.getElementById('carousel');

	Mustache.parse(template);

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
							title: 'mufinki - pizzerinki',
							image: 'images/pizzerinkimin.jpg'
						},
						{	
							title: 'zawijańce z tortilli',
							image: 'images/zawijancemin.jpg'
						}						
					];
		
	for(let i=0; i<mealData.length; i++) {
		let generatedMeal = Mustache.render(template, mealData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMeal);
	}
	
})();