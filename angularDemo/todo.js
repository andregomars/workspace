var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',['$scope', function($scope) {
	$scope.todos = [{text:"contact vendor", done:false},
					{text:"make contract with vendor", done:false}];

	$scope.addTodo = function() {
		if ($scope.formTodoText) {
			$scope.todos.push({text:$scope.formTodoText, done:false});
			$scope.formTodoText = '';
		}
	};

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	};

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		});
	};
}]);