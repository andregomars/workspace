var gulp = require("gulp"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename")
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify");

gulp.task("process-styles", function(){
	return gulp.src("src/styles/main.scss")
		.pipe(sass())
		.pipe(autoprefixer("last 2 version"))
		.pipe(gulp.dest("dest/styles"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("dest/styles"));
});

gulp.task("process-scripts", function(){
	return gulp.src("src/scripts/*.js")
		.pipe(concat("main.js"))
		.pipe(gulp.dest("dest/scrpts"))
		.pipe(rename({suffix: ".min"}))
		.pipe(uglify())
		.pipe(gulp.dest("dest/scrpts"));
});

gulp.task("watch", function(){
	gulp.watch("src/scripts/*.js", ["process-scripts"]);
})

gulp.task("default", ["watch"]);