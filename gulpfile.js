var gulp = require('gulp');
    imagemin = require ('gulp-imagemin');
    minify = require('gulp-minify');
   
// image compression

gulp.task('image', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('compressed'));
});

gulp.task('image', function() {
    gulp.src('views/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('compressed'));
});

// JS compression
gulp.task('compress', function() {
    gulp.src('views/js/*')
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('dist'))
  });

