var myModule = angular.module("myApp", []);

myModule.controller("myController", function($scope) {
			// $scope.name = $scope.name || "Ser Waymar Royce";
			$scope.name = "Ser Waymar Royce";
			$scope.place = "house";
			$scope.inhabitants = "heirs";
			$scope.descriptor = "handsome";
			$scope.age = 18;
			$scope.comparator = "knife";
			$scope.color = "black";
			$scope.mount = "destrier";
			$scope.priority = "wardrobe";
			
			$scope.gender = 'Male';
			$scope.child = 'son';
			$scope.pronounUpper = 'He';
			$scope.pronounLower = 'he';
			$scope.possessivePronoun = 'his';
			$scope.sibling = 'Brother';

			$scope.genderApply = function(gender) {
				if(gender === 'Male') {
					$scope.gender = 'Male';
					$scope.child = 'son';
					$scope.pronounUpper = 'He';
					$scope.pronounLower = 'he';
					$scope.possessivePronoun = 'his';
					$scope.sibling = 'Brother';				
				} else {
					$scope.gender = 'Female';
					$scope.child = 'daughter';
					$scope.pronounUpper = 'She';
					$scope.pronounLower = 'she';
					$scope.possessivePronoun = 'her';
					$scope.sibling = 'Sister';
				}
				console.log('function method a fired');
			};

			$scope.$watch('gender', $scope.genderApply);

			$scope.submitted = false;
			$scope.valid = undefined;

			$scope.submit = function() {
				$scope.submitted = true;
				

				if($scope.madLibsForm.$valid) {
					$scope.valid = true;
				}
				
			};
			
			$scope.reset = function() {
				$scope.submitted = false;
				$scope.valid = undefined;
				$scope.name = "Ser Waymar Royce";
				$scope.place = "house";
				$scope.inhabitants = "heirs";
				$scope.descriptor = "handsome";
				$scope.age = 18;
				$scope.comparator = "knife";
				$scope.color = "black";
				$scope.mount = "destrier";
				$scope.priority = "wardrobe";
				
				$scope.gender = 'Male';
				$scope.child = 'son';
				$scope.pronounUpper = 'He';
				$scope.pronounLower = 'he';
				$scope.possessivePronoun = 'his';
				$scope.sibling = 'Brother';
			};
});

myModule.filter('default', function() {
	return function (input, model) {
		if (input) {
			return input;
		} else {
			switch (model) {
				case 'name':
					return 'Ser Waymar Royce';
					break;
				case 'Ser Waymar':
					return 'Ser Waymar';
					break;
				case 'place':
					return 'house';
					break;
				case 'inhabitants':
					return 'heirs';
					break;
				case 'descriptor':
					return 'handsome';
					break;
				case 'age':
					return 18;
					break;
				case 'comparator':
					return 'knife';
					break;
				case 'color':
					return 'black';
					break;
				case 'mount':
					return 'destrier';
					break;
				case 'garrons':
					return 'garrons';
					break;
				case 'priority':
					return 'wardrobe';
					break;
				default:
					return input;
			}
		}			
		// } else if (a == 'a') {
		// 	return 'apple';
		// } else if (a == 'b') {
		// 	return 'banana';
		// } else {
		// 	return 'horseshoe';
		// }

	};


		// switch (input) {
		// 	case a:
		// 		return 'yolo';
		// 		// break;
		// 	default: 
		// 		return 'bark'; 
		// }

});

