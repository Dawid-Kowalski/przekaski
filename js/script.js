'use strict';
(function(){ 

	let template = document.getElementById('template').innerHTML;
	let results = document.getElementById('results');

	Mustache.parse(template);

	let dataHello = 
					[
						{	
							prefix: 'Mr',
							firstname: 'John',
							lastname: 'Smith'
						},
						{	
							prefix: 'Mrs',
							firstname: 'Maria',
							lastname: 'Jones'
						},
						{	
							prefix: 'Mr',
							firstname: 'Tom',
							lastname: 'Newman'
						}
					];
		
	for(let i=0; i<dataHello.length; i++) {
		let generatedHello = Mustache.render(template, dataHello[i]);
		results.insertAdjacentHTML('beforeend', generatedHello);
	}
	
})();