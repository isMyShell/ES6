import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'
import args from './util/args'

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();
	gulp.wacth('app/**/*.js',['scripts'])
	gulp.wacth('app/**/*.ejs',['pages'])
	gulp.wacth('app/**/*.css',['css'])
})
