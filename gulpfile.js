var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('default', function() {
  //code here
  console.log('Hello world');
});

gulp.task('testload', function() {
  return gulp.src('src/testLoad.js')
    .pipe(browserify({
      insertGlobals : false,
      debug : false
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/payloads'))
});
