var gulp = require("gulp");
var jshint = require("gulp-jshint");
var mocha = require("gulp-mocha");
var stylish = require("jshint-stylish");
var jscs = require("gulp-jscs");

var paths = {
  src:["./src/BombArray.js"],
  tests: ["./test/test.js"]
}

gulp.task("lint", function(){
  return gulp.src(paths.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task("tests", function(){
  return gulp.src(paths.tests)
    .pipe(mocha());
});

gulp.task("jscs", function(){
  return gulp.src(paths.src)
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task("watch", function(){
  gulp.watch(paths.src, ["lint","jscs"]);
});

gulp.task("default",["lint", "tests", "jscs"]);
