let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserlist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});