angular.module("myApp", []).controller("myController", ["$scope", 
		function($scope) {
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

			$scope.view = 'input';

			$scope.submitted = false;

			$scope.submit = function() {
				$scope.submitted = true;

				if($scope.madLibsForm.$valid) {
					$scope.view = 'output';
					document.getElementById('input-div').style.display = "none";
				}
				
			};
			
			$scope.reset = function() {
				$scope.view = 'input';
				$scope.submitted = false;
				document.getElementById('input-div').style.display = "block";
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
		}
	]);

