'use strict';

const gulp = require('gulp'),
    // sassVariables = require('gulp-sass-variables'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    clean = require('gulp-clean'),
    pug = require('gulp-pug');

// common
function cleanTask(){
    return gulp.src(['dist/style.css', 'src/css/**/*.css'])
        .pipe(clean())
}
function html(){
    return gulp.src('src/pages/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
}
function css(){
    return gulp.src('src/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
}
function jsConcat(){
    return gulp.src('src/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
}
function font(){
    return gulp.src('src/assets/fonts/*.*')
        .pipe(gulp.dest('dist/assets/fonts'));
}
function browserSyncf(){
    browserSync.init(['./dist/**/**.**'],{
        port: 8000,
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
}
function img(){
    return gulp.src('src/assets/img/**/*')
        .pipe(gulp.dest('dist/assets/img'));
}
function icons(){
  return gulp.src('src/assets/icons/**/*')
      .pipe(gulp.dest('dist/assets/icons'));
}
function watchTask(){
    gulp.watch('src/**/*.scss', {usePolling: true}, gulp.series(css));
    gulp.watch('src/**/*.pug', gulp.series(html));
    gulp.watch('src/**/*.js', gulp.series(jsConcat));
    gulp.watch('src/assets/**/*.*')
}
// production
function cssMin(){
    return gulp.src('dist/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
}
function minifyJs(){
    return gulp.src('dist/js/main.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/js'));
}

exports.minifyJs = minifyJs;
exports.cssMin = cssMin;
exports.js = jsConcat;
exports.img = img;
exports.icons = icons;
exports.cleanTask = cleanTask;
exports.html = html;
exports.css = css;
exports.font = font
// exports.concats = concats;
exports.sync = browserSyncf;
exports.watch = watchTask;

exports.dev = gulp.parallel(gulp.series(html, css, jsConcat, img, icons, font, browserSyncf), watchTask);
exports.prod = gulp.parallel(html, gulp.series(cleanTask, css, cssMin), gulp.series(jsConcat, minifyJs), img, font);