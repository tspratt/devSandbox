angular
		.module('todo', [])
		.controller('todoCtrl', ['$scope', function ($scope) {
			$scope.items = [
				{description: 'Dr appt', date: '2015-12-09T05:00:00.000Z', priority: 'critical', status: 'New'},
				{description: 'Dentist appt', date: '2015-12-19T05:00:00.000Z', priority: 'optional', status: 'In Process'}];
			$scope.completeOnly = true;
			$scope.orderBy = 'date';
			$scope.formVisible = false;
			$scope.currentItem;

			$scope.addItem = function () {
				$scope.currentItem = {description: '', date: '', priority: '', status: 'New'};
				$scope.formVisible = true;
				console.log('here');
			};

			$scope.closeForm = function (mode) {
				if (mode === 'save'){
					$scope.items.push($scope.currentItem);
				}
				$scope.formVisible = false;
			};

			$scope.deleteItem = function (index) {
				$scope.items.splice(index,1);
			};
			$scope.editItem = function (index) {
				console.log('edit: ', index);
				$scope.currentItem = $scope.items[index];
				$scope.formVisible = true;
			};
			$scope.setStatus = function (index, sStatus) {
				$scope.items[index].status = sStatus;
			};
		}])
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
