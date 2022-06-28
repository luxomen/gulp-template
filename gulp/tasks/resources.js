export const resources = () => $.gulp.src($.paths.src.resources)
    .pipe($.gulp.dest($.paths.dist.resources));
