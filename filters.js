angular.module('defaultFilters', [])
	.filter('default', function() {
		return function() {

			var inputs = {
				'name' : "Ser Waymar Royce", 
				'place' : "house",
				'inhabitants' : "heirs",
				'descriptor' : "handsome",
				'age' : 18,
				'comparator' : "knife",
				'color' : "black",
				'mount' : "destrier",
				'priority' : "wardrobe",
				'gender' : 'Male'
			};

			for(var i = 0; i < inputs.length; i++) {
				if(!$scope[i]) {
					$scope[i] = inputs[i];
				}	
			}
		};
	});