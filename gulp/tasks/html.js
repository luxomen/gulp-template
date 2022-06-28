import gulpWebpHtmlNoSVG from "gulp-webp-html-nosvg";
import gulpVersionNumber from "gulp-version-number";
import gulpFormatHtml from "gulp-format-html";
import pug from "gulp-pug";

export const html = () => $.gulp.src($.paths.src.html)
    .pipe(pug({
        "pretty": false,
        "verbose": true
    }))
    .pipe($.plugins.if($.isBuild, gulpVersionNumber({
        "value": "%DT%",
        "append": {
            "key": "_v",
            "cover": 0,
            "to": [
                "css",
                "js"
            ]
        },
        "output": {
            "file": "./gulp/version.json"
        }
    })))
    .pipe($.plugins.if($.isBuild, gulpWebpHtmlNoSVG()))
    .pipe($.gulp.dest($.paths.dist.html))
    .pipe($.gulp.src("./dist/*.html"))
    .pipe(gulpFormatHtml({
        "indent_size": 4,
        "end_with_newline": true
    }))
    .pipe($.gulp.dest($.paths.dist.html))
    .pipe($.plugins.browserSync.stream());
