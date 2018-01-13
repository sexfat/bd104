var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass' , function(){
    //來源
   return gulp.src('sass/style.scss')
   .pipe(sass().on('error', sass.logError))
   //目的地
   .pipe(gulp.dest('css/'));
});


gulp.task('watch', function () {
    //監看所有檔案
    gulp.watch(['./sass/*.scss','./sass/**/*.scss'] , ['sass']);
  });