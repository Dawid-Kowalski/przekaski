'use strict';
(function(){ 

	let template = document.getElementById('template').innerHTML;
	let carousel = document.getElementById('carousel');

	Mustache.parse(template);

	let mealData = 
					[
						{	
							title: 'kurczaki w panierce'
						},
						{	
							title: 'quesarillos'
						},
						{	
							title: 'zapiekane pieczarki'
						},
						{	
							title: 'mufinki - pizzerinki'
						},
						{	
							title: 'zawijańce z tortilli'
						}						
					];
		
	for(let i=0; i<mealData.length; i++) {
		let generatedMeal = Mustache.render(template, mealData[i]);
		carousel.insertAdjacentHTML('beforeend', generatedMeal);
	}
	
})();