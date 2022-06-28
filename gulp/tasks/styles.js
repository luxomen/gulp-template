import stylus from "gulp-stylus";
import rename from "gulp-rename";
import webpcss from "gulp-webpcss";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import gcmq from "gulp-group-css-media-queries";

export const styles = () => $.gulp.src($.paths.src.styles, {sourcemaps: $.isDev})
    .pipe(stylus({
        "include css": true
    }))
    .pipe($.plugins.if($.isBuild, webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
    })))
    .pipe($.plugins.if($.isBuild, gcmq()))
    .pipe($.plugins.if($.isBuild, autoprefixer({
        grid: true,
        cascade: false
    })))
    .pipe($.plugins.if($.isBuild, $.gulp.dest($.paths.dist.styles)))
    .pipe($.plugins.if($.isBuild, cleanCSS({
        level: 2
    })))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe($.gulp.dest($.paths.dist.styles))
    .pipe($.plugins.browserSync.stream());
