const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-ruby-sass');

gulp.task('clean:css',function () {
    del(['dist/*.css']);
});

gulp.task('sass',function(){
    return sass('src/style/app.scss',{style:'compressed'})
        .on('error', sass.logError)
        .pipe(gulp.dest('dist'))

});

gulp.task('watch', function() {
    gulp.watch('src/style/**/*.scss', ['sass']);
});

gulp.task('default',['watch','sass']);