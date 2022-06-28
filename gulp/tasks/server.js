export const server = () => {
    $.plugins.browserSync.init({
        "server": {
            "baseDir": $.paths.distDirectory
        },
        "notify": false,
        "port": 8080
    });
}
