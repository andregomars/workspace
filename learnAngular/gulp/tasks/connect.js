'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect';
import mw from '../../middlewares';

gulp.task('connect', function() {
        connect.server({
                port: 9000,
                livereload: true,
                middleware: function(connect) {
                        return mw(connect, []);
                }
        });
});
