var gulp = require("gulp");
var sass = require("gulp-sass");

var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        //src: "styles/**/*.sass",
        src: "styles/styles.sass",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "css"
    }
 
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

	
var browserSync = require("browser-sync").create();
// Define tasks after requiring dependencies
var done;

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest(paths.styles.dest));
}
 
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

function reload(done) {
    browserSync.reload();
    done();
    
}
	
function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    gulp.watch(paths.styles.src, style);
    // gulp.watch("styles/*.sass", reload);
    // gulp.watch("css/*.css", reload);
    gulp.watch("*.html", reload);
    gulp.watch("js/*.js", reload);
    gulp.watch(paths.styles.src, reload);
    
}
    
// Don't forget to expose the task!
exports.watch = watch

// gulp.task(watch, gulp.parallel(watch1, browserSync));	
