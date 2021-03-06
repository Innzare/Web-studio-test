const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

// Работа со скриптами

module.exports = function script() {
  return gulp.src('dev/static/js/*.js')
    .pipe(concat('script.js'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(minify())
    .pipe(gulp.dest('dist/static/js/'));
};
