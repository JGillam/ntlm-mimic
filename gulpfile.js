var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'] , function() {
  return gulp.src('src/payload.js')
  .pipe(browserify({
    insertGlobals : false,
    debug : true
  }))
  .pipe(gulp.dest('dist/payloads'))
  .pipe(uglify())
  .pipe(rename(function(path) {
      path.extname = '.min.js'
    }
  ))
  .pipe(gulp.dest('dist/payloads'))
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
/*
&&
gulp.src('src/payload.js')
.pipe(browserify({
  insertGlobals : false,
  debug : false
}))

*/
