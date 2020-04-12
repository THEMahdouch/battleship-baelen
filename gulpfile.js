var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpautoprefixer = require('gulp-autoprefixer');
 
//Creating a Style task that convert LESS to CSS

gulp.task('styles',function(){
    var srcfile = './less/styles.less';
    var temp = '.';
    return gulp
        .src(srcfile)
        .pipe(gulpless())
        .pipe(gulpautoprefixer({browsers: ['last 2 versions','>5%']}))
        .pipe(gulp.dest(temp));
});