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
							title: 'kurczaki w panierce',
							components: [
											'1/2 kg piersi z kurczaka',
											'2 szklanki płatków kukurydzianych',
											'2 jajka',
											'sól',
											'pieprz',
											'1/3 łyżeczki ostrej papryki',
											'1 i 1/2 łyżeczki słodkiej papryki',
											'4 łyżki oleju rzepakowego'
										],
							discription: 'Kurczaka kroimy w nieduże paski. Przyprawiamy solą, pieprzem, papryką ostrą i słodką. Polewamy olejem i jeśli mamy czas marynujemy. Płatki kukurydziane wsypujemy do miseczki i kruszymy pałką. Kawałki kurczaka obtaczamy najpierw w roztrzepanych widelcem jajkach, później w płatkach kukurydzianych, a następnie układamy je na blaszce wyłożonej papierem do pieczenia i pieczemy ok. 15 min. w temp. 180 st. C. Podajemy na ciepło bądź zimno z dodatkiem sosu czosnkowego lub jak kto woli paprykowego.'
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

recipes[0].hidden = false;

flkty.on('change', function(index){
	for(let i=0; i<recipes.length; i++){
			recipes[i].hidden = true;
		}
	recipes[index].hidden = false;
});