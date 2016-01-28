function ExampleCtrl($http, $resource) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  vm.todos = [];
  vm.new_todo = '';

  var task = $resource('http://localhost:9000/api/v1/todo/:taskId', {taskId: '@id'});
  vm.load = function() {
	  // $http.get('http://localhost:9000/api/v1/todo').success(function(data){
	  // 	vm.todos = data;
	  // });
		task.query(function(data){
			vm.todos = data;
		});
	};

  vm.add = function(event){
  	if (event.keyCode === 13) {
  		$http.post('http://localhost:9000/api/v1/todo',{text:vm.new_todo}).success(function(data){
	  		vm.todos = data;
	  		vm.new_todo = '';
	  });
  	}
  };

  vm.update = function(event, todo){
  	if (event.keyCode === 13 && !!todo) {
  		$http.post('http://localhost:9000/api/v1/todo/'+todo.id, {text:todo.text}).success(vm.load);
  	}
  };

  vm.done = function(id){
  	if (!!id) {
  		$http.delete('http://localhost:9000/api/v1/todo/'+id).success(vm.load);
  	}
  };


}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
