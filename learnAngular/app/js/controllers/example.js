//function ExampleCtrl($http, $resource) {
function ExampleCtrl($resource) {
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
  		// $http.post('http://localhost:9000/api/v1/todo',{text:vm.new_todo}).success(function(data){
	  	// 	vm.todos = data;
	  	// 	vm.new_todo = '';
      var t = new task({text:vm.new_todo});
      t.$save(function(){
        vm.load();
        vm.new_todo='';
      });
  	}
  };

  vm.update = function(event, todo){
  	if (event.keyCode === 13 && !!todo) {
  		// $http.post('http://localhost:9000/api/v1/todo/'+todo.id, {text:todo.text}).success(vm.load);
      todo.$save().then(vm.load);
  	}
  };

  vm.done = function(todo){
  	if (!!todo) {
  		// $http.delete('http://localhost:9000/api/v1/todo/'+todo.id).success(vm.load);
      todo.$delete().then(vm.load);
  	}
  };


}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
