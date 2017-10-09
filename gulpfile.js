var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  gulp.src('css/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch',function() {
  gulp.watch('css/**/*.scss', ['default']);
});