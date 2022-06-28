import gulp from "gulp";

import { paths } from "./gulp/configs/paths.js";
import { plugins } from "./gulp/configs/plugins.js";

global.$ = {
    isDev: process.argv.includes("--dev"),
    isBuild: process.argv.includes("--build"),
    plugins: plugins,
    paths: paths,
    gulp: gulp
};

import { resources } from "./gulp/tasks/resources.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";

const watcher = () => {
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.styles, styles);
    gulp.watch(paths.watch.scripts, scripts);
    gulp.watch(paths.watch.images, images);
    gulp.watch(paths.watch.fonts, fonts);
    gulp.watch(paths.watch.resources, resources);
};

const tasks = gulp.parallel(html, styles, scripts, images, fonts, resources);

const dev = gulp.series(reset, tasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, tasks);

export { dev };
export { build };

export default dev;
