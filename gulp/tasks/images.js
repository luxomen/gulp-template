import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

export const images = () => $.gulp.src($.paths.src.images.optimization)
    .pipe($.plugins.newer($.paths.dist.images))
    .pipe($.plugins.if($.isBuild, webp()))
    .pipe($.plugins.if($.isBuild, $.gulp.dest($.paths.dist.images)))
    .pipe($.plugins.if($.isBuild, $.gulp.src($.paths.src.images.optimization)))
    .pipe($.plugins.if($.isBuild, $.plugins.newer($.paths.dist.images)))
    .pipe($.plugins.if($.isBuild, imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
    })))
    .pipe($.gulp.dest($.paths.dist.images))
    .pipe($.gulp.src($.paths.src.images.static))
    .pipe($.gulp.dest($.paths.dist.images))
    .pipe($.plugins.browserSync.stream());
