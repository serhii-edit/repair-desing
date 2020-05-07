// const gulp = require('gulp');
const browserSync = require('browser-sync').create();


let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('css/minify'));
});


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

