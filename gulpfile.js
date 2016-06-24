var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

var root = 'app/';
var paths = {
    scripts: root+ 'js/**/*.js',
    sass: root + 'style/app.scss',
    sassRoot: root + 'style/**/*.scss',
    images: root + 'img/**/*',
    dist: root + 'dist'
};

gulp.task('sass',function(){
    return sass(paths.sass)
        .on('error',sass.logError)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    gulp.watch(paths.sassRoot, ['sass']);
});

gulp.task("webpack", function() {
    return gulp
        .src('./')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default',['watch','sass']);