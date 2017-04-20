var gulp = require('gulp'),
    mincss = require('gulp-mini-css'),//CSS压缩
    uglify = require('gulp-uglify');//js压缩

var src_css = './src/app/component/css',
    dest_css = './dest/app/component/css';

gulp.task('mincss', function () {
    gulp.src(src_css+'/*.css')
        .pipe(mincss())
        .pipe(gulp.dest(dest_css));
});

gulp.task("hello", function(){
    console.log("hello world");
})

gulp.task('default',function(){
    gulp.run('mincss');
});