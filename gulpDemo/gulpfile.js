/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var connect = require('gulp-connect');
var mw = require('./middlewares.js');
/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

gulp.task('connect', function() {
	connect.server({
		port: 9000,
		livereload: true,
		middleware: function(connect) {
			return mw(connect, []);
		}
	});
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean', 'serve', 'connect'], function () {
  gulp.start('build');
});
