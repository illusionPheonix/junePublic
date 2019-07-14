// 引入
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
const babel = require('gulp-babel');
var imagemin = require("gulp-imagemin");
var less = require("gulp-less");
var cleanCSS = require("gulp-clean-css");
var browserSync = require('browser-sync').create();
// 引入browserSync的热刷新属性
var reload = browserSync.reload;

// 静态服务器
gulp.task('serve', function () {
    // 初始化编译
    runSequence('lessToCss','images','uglify');
    browserSync.init({
        //  服务器配置
        server: {
            baseDir: "./"  // 服务器的根目录
        }
    });
    // 添加代码监听
    gulp.watch("assets/images/**/*", ['images']).on('change', reload);
    gulp.watch("assets/styles/**/*.less", ['lessToCss']).on('change', reload);
    gulp.watch("src/**/*.js", ['uglify']).on('change', reload);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("views/**/*.html").on('change', reload);

});

gulp.task("uglify", function () {
    console.log('开始压缩js.....');
    gulp
        .src("src/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))//支持es6
        .pipe(uglify())//压缩
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/js"));
    console.log('压缩js完成.....');

})
   



gulp.task('images', function () {
    console.log('开始压缩图片.....');
    gulp
        .src('assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"))
});


gulp.task('lessToCss', function () {
    console.log('开始压缩less.....');
    gulp
        .src('assets/styles/**/*.less')
        .pipe(less())//less转css
        .pipe(cleanCSS({ compatibility: 'ie8' }))//压缩css
        .pipe(rename({
            suffix: ".min"
        }))//重命名
        .pipe(gulp.dest("dist/css"));
    console.log('压缩完成.....');
});

