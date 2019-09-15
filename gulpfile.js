const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const del = require('del');
const runSequence = require('run-sequence');
const wait = require('./node_modules/gulp-wait');


gulp.task('clean:build', function() {
    return del('./build');
});

gulp.task('server',  function() {
    browserSync.init({
    	server: {baseDir: './build/'}
    });
    gulp.watch('src/pug/**/*.*', ['pug']);
    gulp.watch('src/sass/**/*.*', ['scss']);
	gulp.watch('src/js/**/*.*', ['copy:js']);
	gulp.watch('src/fonts/**/*.*', ['copy:fonts']);
    gulp.watch('src/libs/**/*.*', ['copy:libs']);
    gulp.watch('src/img/**/*.*', ['copy:img']);
});

gulp.task('copy:js', function() {
    return gulp.src('src/js/**/*.*')
    	.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
});

gulp.task('copy:fonts', function() {
    return gulp.src('src/fonts/**/*.*')
    	.pipe(gulp.dest('./build/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('copy:libs', function() {
    return gulp.src('src/libs/**/*.*')
    	.pipe(gulp.dest('./build/libs'))
		.pipe(browserSync.stream());
});

gulp.task('copy:img', function() {
    return gulp.src('src/img/**/*.*')
    	.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
});




gulp.task('scss', function() {
	return gulp.src('./src/sass/main.scss')
		.pipe(wait(1500))
	    .pipe(plumber({
	    	errorHandler: notify.onError(function(err){
	    		return {
	    			title: 'Styles',
	    			message: err.message
	    		}
	    	})
	    }))
	    .pipe(sourcemaps.init())
		.pipe(scss())
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest('./build/css'))
	    .pipe(browserSync.stream());
});



gulp.task('pug', function() {
    return gulp.src('./src/pug/pages/**/*.pug')
	    .pipe(plumber({
	    	errorHandler: notify.onError(function(err){
	    		return {
	    			title: 'Pug',
	    			message: err.message
	    		}
	    	})
	    }))
	    .pipe(pug({
	    	pretty: true
	    }))
	    .pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
});



gulp.task('default', function(callback){
	runSequence(
		'clean:build',
		['scss', 'pug', 'copy:js','copy:fonts', 'copy:libs', 'copy:img' ],
		'server',
		callback
	)
});