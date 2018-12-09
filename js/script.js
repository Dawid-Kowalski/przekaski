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
							title: 'zawijańce',
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
							title: 'quesadilla',
							components: [
										    '6 placków tortilli (użyłam pszennych)',
										    'pierś z kurczaka (ok 100 g)',
										    'przyprawy do kurczaka lub sól, pieprz, papryka słodka i curry',
										    '500 g pieczarek',
										    '250 g sera żółtego',
										    'ketchup do smarowania tortilli lub sos pomidorowy',
										    '1 cebula',
										    'zioła prowansalskie do posypywania',
										    '8 plasterków bekonu (boczku lub ulubionej wędliny)'
										],
							discription: 'Piekarnik nagrzewam do 180 stopni, grzanie góra-dół. Pierś z kurczaka kroję na kawałki i przyprawiam dowolną przyprawą. Przysmażam je na patelni bez tłuszczu. Pieczarki i ser żółty ścieram na tarce o grubych oczkach a cebulę kroję w piórka. Placki tortilli smaruję ketchupem. Jeden placek układam na blaszce do zapiekania a na nim pieczarki, cebulę i ser. Posypuję ziołami prowansalskimi i przykrywam drugą tortillą. Wstawiam do piekarnika na ok 10 min. W między czasie przygotowuję kolejny placek. Na rozsmarowany ketchup układam żółty ser, cebulę, kurczaka, i ponownie ser. Posypuję ziołami i przykrywam kolejnym plackiem. Kiedy piekarnik się zwolni wstawiam na ok 10 min. Ponownie na kolejnym placku smaruję ketchup i układam pieczarki, cebulę, boczek, ser i przykrywam. Dociskam i układam na gorącej patelni. Gdy placek się przyrumieni, przewracam delikatnie na drugą stronę. Każdy placek kroję na 8 części. Podaję od razu z sosem czosnkowym, majonezem lub sosem słodko kwaśnym.'
						},
						{	
							id: 2,
							title: 'zapiekane pieczarki',
							components: [
    										'opakowanie dużych pieczarek',
    										'pół cebuli',
    										'kilka pomidorków koktajlowych',
    										'sól',
    										'pieprz',
    										'ser'
										],
							discription: 'Pieczarki dokładnie myjemy i posypujemy solą i pieprzem. Soli można dodać więcej, bo niesłone pieczarki nie są dobre. Cebulę pokroić w kostkę i delikatnie podsmażyć na patelni, pod koniec dodać pomidorki koktajlowe pokrojone w ósemki. Usmażony farsz nałożyć na pieczarki. Następnie na wierzchu poukładać kawałeczki sera. Piec w piekarniku nagrzanym do 200 stopni około pół godziny. Podawać jako dodatek do drugiego dania, ale świetnie smakują też solo. '
						},
						{	
							id: 3,
							title: 'mufinki-pizzerinki',
							components: [
										    '200 g mąki',
										    '2 łyżeczki proszku do pieczenia',
										    '1/2 łyżeczki oregano',
										    '1/2 łyżeczki bazylii',
										    'sól',
										    '1/2 szklanki oleju',
										    '1/2 szklanki mleka',
										    '2 jajka',
										    '1 kula sera mozzarella',
										    '100 g salami',
										    '1/2 czerwonej papryki',
										    '6 pomidorków koktajlowych'
										],
							discription: 'W misce mieszamy razem mąkę, proszek do pieczenia oraz przyprawy. Osobno mieszamy jajka, olej oraz mleko, aż składniki się połączą. Mokre składniki dodajemy do suchych i mieszamy do uzyskania jednolitej konsystencji. Ser trzemy na tarce. 2/3 dodajemy do ciasta wraz z pokrojoną drobno papryką oraz pokrojonym w cienkie paseczki salami. Mieszamy i nakładamy do formy na 12 muffinów. Pozostałym serem posypujemy wierzch muffinów. Pomidorki kroimy na ćwiartki i na wierzchu każdego muffina układamy dwa kawałki. Wkładamy do piekarnika rozgrzanego do 180 stopni C na około 25 minut. Upieczone muffiny wyjmujemy i studzimy.'
						},
						{
							id: 4,
							title: 'zawijańce z tortilli',
							components: [
    										'placki tortilli',
										    'serek śmietankowy typu philadelphia',
										    'wędzony łosoś',
										    'papryka',
										    'zielenina'
										],
							discription: 'Tortillę wysmaruj serkiem, ułóż łososia i pokrojoną w słupki paprykę, posyp rukolą lub inną zieleniną. Zwiń, odczekaj kilka minut, pokrój w plastry o grubości ok. 2 cm. Dla dekoracji przewiąż roladki.'
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