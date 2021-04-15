let gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});