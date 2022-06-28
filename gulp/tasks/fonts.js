export const fonts = () => $.gulp.src($.paths.src.fonts)
    .pipe($.gulp.dest($.paths.dist.fonts));
