function ExampleCtrl(RestfulService) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  vm.todos = [];
  vm.new_todo = '';

  vm.load = function() {
    // XhrService.get(function(data){
    //  vm.todos = data;
    // });
    RestfulService.get().then(function(data){
     vm.todos = data;
    });
	};

  vm.add = function(event){
  	if (event.keyCode === 13) {
      // XhrService.post(vm.new_todo, function(){
      //   vm.load();
      //   vm.new_todo='';  
      // });
      RestfulService.post(vm.new_todo).then(function(){
        vm.load();
        vm.new_todo='';
      });
  	}
  };

  vm.update = function(event, todo){
  	if (event.keyCode === 13 && !!todo) {
      // XhrService.update(todo, vm.load);
      RestfulService.update(todo).then(vm.load);
  	}
  };

  vm.done = function(todo){
  	if (!!todo) {
      //XhrService.delete(todo, vm.load);
      RestfulService.delete(todo).then(vm.load);
  	}
  };


}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
