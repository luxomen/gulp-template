import browserSync from "browser-sync";
import ifPlugin from "gulp-if";
import newer from "gulp-newer";

export const plugins = {
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
};
