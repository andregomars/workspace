function RestfulService($resource, AppSettings) {
  'ngInject';

  const service = {};
  var task = $resource(AppSettings.apiPath + ':taskId', {taskId: '@id'});

  service.get = function(cb) {
    task.query(function(data){
     cb(data);
    });
  };

  service.delete = function(data, cb) {
    data.$delete().then(cb);
  };

  service.update = function(data, cb) {
    data.$save().then(cb);
  };

  service.post = function(data, cb) {
      var t = new task({text:data});
      t.$save(function(){
        cb();
      });
  };

  return service;

}

export default {
  name: 'RestfulService',
  fn: RestfulService
};
