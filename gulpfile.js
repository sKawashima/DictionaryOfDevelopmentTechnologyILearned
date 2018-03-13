const gulp = require("gulp")
const concat = require("gulp-concat")
const toc = require('gulp-markdown-toc');

gulp.task("default", function() {
  gulp.src('./src/*.md')
    .pipe(concat('README.md'))
    .pipe(toc())
    .pipe(gulp.dest('./'))
})
