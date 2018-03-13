var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", function() {
  gulp.src('./src/*.md')
    .pipe(concat('README.md'))
    .pipe(gulp.dest('./'))
    ;
});
