const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


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
  watch("./js/*.js").on('change', browserSync.reload);
};
// Browser Static server (end)


// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};
// Compile sass into css (end)

exports.serve = bs;


// Minify css file into minimize(save merrory)
// let gulp = require('gulp');
// let cleanCSS = require('gulp-clean-css');
// gulp.task('minify-css', () => {
//   return gulp.src('css/*.css')
//     .pipe(cleanCSS({debug: true}, (details) => {
//       console.log(`${details.name}: ${details.stats.originalSize}`);
//       console.log(`${details.name}: ${details.stats.minifiedSize}`);
//     }))
//   .pipe(gulp.dest('css/minify'));
// });
// Minfify (end)

