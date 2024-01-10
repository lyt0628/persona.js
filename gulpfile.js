// rollup and gulp
const { rollup } = require('rollup');
const { series, parallel, src, dest, watch } = require('gulp');
// plugin
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const less = require('gulp-less');
const concat = require('gulp-concat');
// node module
const del = require('delete');
const path = require('path');


function clean(cb) {
  del(['./dist/'], cb);
}

function css(cb) {
  return src('./packages/**/*.less')
        .pipe(less())
        // .pipe(postcss())
        .pipe(concat('curse.css'))
        .pipe(dest('./dist'))
        // .pipe(uglify())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('./dist'));
}

function javascript(cb) {
  return src('./packages/**/*.js')
        .pipe(babel())
        .pipe(concat('curse.js'))
        .pipe(dest('./dist'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('./dist'));
}

exports.default = series(clean, parallel(css, javascript));

// watch('./packages/less/*.less', css);
// watch('./packages/*.js',javascript);