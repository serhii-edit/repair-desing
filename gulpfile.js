const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('Hello', function(done) {
  console.log('Hello, world!');
  done();
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


let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
     // Folder with files to minify
     return gulp.src('style.css')
     //The method pipe() allow you to chain multiple tasks together 
     //I execute the task to minify the files
    .pipe(cleanCSS())
    //I define the destination of the minified files with the method dest
    .pipe(gulp.dest('dest'));
});

//We create a 'default' task that will run when we run `gulp` in the project
gulp.task('default', function() {
// We use `gulp.watch` for Gulp to expect changes in the files to run again
  gulp.watch('style.min.css', function(evt) {
  gulp.task('minify-css');
  });
});