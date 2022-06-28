import webpack from "webpack-stream";

export const scripts = () => $.gulp.src($.paths.src.scripts, {sourcemaps: $.isDev})
    .pipe(webpack({
        mode: $.isBuild ? "production" : "development",
        output: {
            filename: "index.min.js"
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                }
            ]
        }
    }))
    .pipe($.gulp.dest($.paths.dist.scripts))
    .pipe($.plugins.browserSync.stream());
