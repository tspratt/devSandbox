angular
		.module('hello', [])
		.config(function ($httpProvider) {

		})
		.run(['$rootScope', function ($rootScope) {

		}])
		.controller('helloCtrl', ['$scope', function ($scope) {
			$scope.username = 'World';
			$scope.isHere = false;
			$scope.sayLabel = 'Hello';
			$scope.btnLabel = 'Hello';
			$scope.languages = ['en_us','sp_mx','de_be','fr_pa'];

			$scope.$watch('isHere', function (newVal, oldVal) {
				$scope.sayLabel = (newVal) ? 'Goodbye' : 'Hello';
				$scope.btnLabel = (newVal) ? 'Hello' : 'Goodbye';
			});

			$scope.toggleHello = function () {
				$scope.isHere = !$scope.isHere;
			}

		}])
		.directive('say', function () {
			var ctrl = ['$scope', function ($scope) {
				$scope.getSay = function () {
					var say;
					switch ($scope.language) {
						case 'en_us':
							say = {hello: 'Hello', goodbye: 'Goodbye'};
							break;
						case 'sp_mx':
							say = {hello: 'Hola', goodbye: 'Adios'};
							break;
						case 'de_be':
							say = {hello: 'Hallo', goodbye: 'Auf Wiedersehen'};
							break;
						case 'fr_pa':
							say = {hello: 'Salut', goodbye: 'Au Revoir'};
							break;
						default:
							say = {hello: 'Salut', goodbye: 'Au Revoir'};
							break;
					}
					return (!$scope.isHere) ? say.hello : say.goodbye;
				}
			}];

			return {
				restrict: 'E',
				scope: {
					username: '=username',
					isHere: '=ishere',
					language: '@language'
				},
				template: '<span class="say"><span ng-class="{goodbye: isHere}">{{getSay()}}</span> {{username}}!</span>',
				controller: ctrl
			}
		})
		.directive('onEnterKey', function () {
			return function (scope, element, attrs) {
				element.bind("keydown keypress", function (event) {
					if (event.which === 13) {
						scope.$apply(function () {
							scope.$eval(attrs.onEnterKey);
						});

						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();
					}
				});
			};
		})
		.directive('focusMe', function () {
			return {
				link: function (scope, element, attrs) {
					scope.$watch(attrs.focusMe, function (value) {
						if (value === true) {
							console.log('value=', value);
							element[0].focus();
							scope[attrs.focusMe] = false;
						}
					});
				}
			};
		});