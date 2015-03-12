import babel from 'gulp-babel';
import browserify from 'gulp-browserify';
import babelify from 'babelify';

export default function (gulp) {
  gulp.task('clean', (cb) => {
    del('dist', cb);
  });

  gulp.task('default', function () {
    return gulp.src('src/app.js')
      .pipe(browserify({
        transform: babelify.configure({
          optional: ['spec.protoToAssign']
        }),
        standalone: 'reportum'
      }))
      .pipe(gulp.dest('dist'));
  });
}
