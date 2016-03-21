var gulp = require('gulp'),
 	less = require('gulp-less'),
 	browserSync = require('browser-sync').create(),
 	path = require('path'),
 	minifyCSS = require('gulp-minify-css'),
 	LessPluginCleanCSS = require('less-plugin-clean-css'),
 	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
 	cleancss = new LessPluginCleanCSS({ advanced: true }),
 	autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] }),
	reload = browserSync.reload;

gulp.task('styles', function () {
  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix, cleancss]
    }))
    .pipe(gulp.dest('./css'))
  	.pipe(minifyCSS())
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./less/*.less", ["styles"]);
    gulp.watch("./js/*.js").on("change", reload);
    gulp.watch("./**/*.html").on("change", reload);
});

// or...
/*
gulp.task('serve', function() {
    browserSync.init({
        proxy: "local.dev"
    });
});
*/

gulp.task('default', ['styles', 'serve']);