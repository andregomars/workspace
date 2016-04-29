function RestfulService($resource, $q, AppSettings) {
  'ngInject';

  const service = {};
  var task = $resource(AppSettings.apiPath + ':taskId', {taskId: '@id'});

  // service.get = function(cb) {
  //   task.query(function(data){
  //    cb(data);
  //   });
  // };

  // service.get = function() {
  //   var deferred = $q.defer();
  //   task.query(function(data){
  //    deferred.resolve(data);
  //   });
  //   return deferred.promise;
  // };
  service.get = function() {
    return $q(function(resolve, reject){
      task.query(function(data){
       resolve(data);
      });
    });
  };

  service.delete = function(data) {
    return $q(function(resolve, reject){
      data.$delete().then(function(){
        resolve();
      });
    });
  };

  service.update = function(data) {
    return $q(function(resolve, reject){
      data.$save().then(function(){
        resolve();
      });
    });
  };

  service.post = function(data) {
    return $q(function(resolve, reject){
      var t = new task({text:data});
      t.$save(function(){
        resolve();
      });
    });
      // var t = new task({text:data});
      // t.$save(function(){
      //   cb();
      // });
  };

  return service;

}

export default {
  name: 'RestfulService',
  fn: RestfulService
};
