"use strict";

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-ruby-sass');

var root = 'app/';
var paths = {
    scripts: root+ 'js/**/*.js',
    sass: root + 'style/app.scss',
    sassRoot: root + 'style/**/*.scss',
    images: root + 'img/**/*',
    dist: root + 'dist'
};

gulp.task('clean:css',function () {
    del(['app/dist/*.css']);
});

gulp.task('sass',function(){
    return sass(paths.sass,{style:'compressed'})
        .on('error',sass.logError)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    gulp.watch(paths.sassRoot, ['sass']);
});

gulp.task('default',['watch','sass']);