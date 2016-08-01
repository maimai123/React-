var gulp = require("gulp"),
    less = require("gulp-less");
    // livereload = require('gulp-livereload');

gulp.task( "less" ,function(){
  return gulp.src('src/css/less/*.less') //该任务针对的文件
      .pipe(less({ compress: true })) //该任务调用的模块 compress为true表示压缩css
      .pipe(gulp.dest('./build/css')); //将会在src/css下生成index.css

});

// gulp.task("testJs",function(){
//     gulp.src("src/js/*.js")
//         .pipe(uglify({
//             //mangle: {except: ['$']}//排除混淆关键字
//             mangle: true,//类型：Boolean 默认：true 是否修改变量名
//             compress: true//类型：Boolean 默认：true 是否完全压缩
//         }))
//         .pipe(gulp.dest("./build/js"));
// });

gulp.task( "testWatch" ,function(){
  // gulp.watch(['./src/css/less/*.less','./src/js/*.js'],['less','testJs']);
  gulp.watch(['./src/css/less/*.less'],['less']);
});
