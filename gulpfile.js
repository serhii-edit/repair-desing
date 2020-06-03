const gulp = require('gulp');
const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};
// Browser Static server (end)


// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
      }))
    .pipe(dest("./css"))
    // .pipe(dest("css/style.css"))
    .pipe(browserSync.stream());
};

function buildCSS(done) {
  src("css/style.css")
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest("dist/css/"));
  done();
};

function buildJS(done) {
  src("js/main.js")
    .pipe(minify({
      ext:{
        min:'.js'
    }
    }))
    .pipe(dest("dist/js/"))
  done();
};

function buildHTML(done) {
  src("**.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest("dist/"));
  done();
};

function buildPHP(done) {
  src(["**.php"])
    .pipe(dest("dist/"));
  src("phpmailer/**/**")
    .pipe(dest("dist/phpmailer/"));
  done();
};

function buildFONTS(done) {
  src("fonts/**/**")
  .pipe(dest("dist/fonts"));
  done();
};

function imageMIN(done) {
  src("img/**/**/**")
  .pipe(tinypng({
    key: '7fp3ZGtHDZ7N3yb0hj2tXlyThL4N69WZ',}))
    .pipe(dest("dist/img/"))
    src("img/**/*.svg")
    .pipe(dest("dist/img/"))
    src("img/**/**/**")
    .pipe(dest("dist/img/types/"))
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, buildHTML, buildPHP, buildFONTS, imageMIN);