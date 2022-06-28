import del from "del";

export const reset = () => del($.paths.clean);
