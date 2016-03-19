var gulp = require('gulp');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var combine = require('stream-combiner2');
var browserSync = require('browser-sync').create();

// Processors
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('styles', function() {
  // Processors for PostCSS
  var processors = [
    autoprefixer({browsers: 'last 2 versions'}),
    cssnano({autoprefixer: false})
  ];
  // Combined streams for error handling
  // No need for pipe.
  var combined = combine.obj([
    gulp.src('./assets/styles/main.scss'),
    sass().on('error', sass.logError),
    postcss(processors),
    rename('main.min.css'),
    gulp.dest('./dist/styles'),
  ]);
  // any errors in the above streams will get caught
  // by this listener, instead of being thrown:
  combined.on('error', console.error.bind(console));
  return combined;
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('./assets/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['watch', 'styles']);
