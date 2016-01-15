(function() {
  'use strict';

  angular
    .module('gulpDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
