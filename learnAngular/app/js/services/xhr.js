function XhrService($http, AppSettings) {
  'ngInject';

  const service = {};

  service.get = function(cb) {
    $http.get(AppSettings.apiPath).success(function(data){
      cb(data);
    });
  };

  service.delete = function(data, cb) {
    $http.delete(AppSettings.apiPath + data.id).success(cb);
  };

  service.update = function(data, cb) {
    $http.post(AppSettings.apiPath + data.id, {text:data.text}).success(cb);
  };

  service.post = function(data, cb) {
    $http.post(AppSettings.apiPath,{text:data}).success(function(){
      cb();
    });
  };

  return service;

}

export default {
  name: 'XhrService',
  fn: XhrService
};
