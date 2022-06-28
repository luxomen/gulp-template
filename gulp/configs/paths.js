import * as nodePath from "path";

const rootDirectory = nodePath.basename(nodePath.resolve());

const srcDirectory = "./sources";
const distDirectory = "./destination";

export const paths = {
    src: {
        html: `${srcDirectory}/pages/*.pug`,
        styles: `${srcDirectory}/configs/styles/main.styl`,
        scripts: `${srcDirectory}/configs/scripts/index.js`,
        fonts: `${srcDirectory}/assets/fonts/*.{woff,woff2}`,
        resources: `${srcDirectory}/assets/resources/**/*.*`,
        images: {
            static: `${srcDirectory}/assets/images/**/*.{svg,gif}`,
            optimization: `${srcDirectory}/assets/images/**/*.{jpg,jpeg,png,webp}`
        }
    },
    dist: {
        html: `${distDirectory}/`,
        styles: `${distDirectory}/assets/css`,
        scripts: `${distDirectory}/assets/js`,
        images: `${distDirectory}/assets/img`,
        fonts: `${distDirectory}/assets/fonts`,
        resources: `${distDirectory}/`,
    },
    watch: {
        html: `${srcDirectory}/**/*.pug`,
        styles: `${srcDirectory}/**/*.{styl,css}`,
        scripts: `${srcDirectory}/**/*.js`,
        images: `${srcDirectory}/assets/images/**/*.{jpg,jpeg,png,webp,gif,svg}`,
        fonts: `${srcDirectory}/assets/fonts/*.{woff,woff2}`,
        resources: `${srcDirectory}/assets/resources/**/*.*`
    },
    clean: distDirectory,
    srcDirectory: srcDirectory,
    distDirectory: distDirectory,
    rootDirectory: rootDirectory
};
