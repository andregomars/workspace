(function() {
  'use strict';

  angular
    .module('gulpngDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
