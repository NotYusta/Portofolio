
// @ts-nocheck
import path from "path";

export const dirsName = {
    publicFolder: path.join(__dirname, "../../../../public"),
    resourcesViews: path.join(__dirname, "../../../views"),
}

export const hbsHelpers = {
    ifeq: (a, b, options) => {
        if (a == b) return options.fn(this);
        else return options.inverse(this);
    },
    ifnoteq: (a, b, options) => {
        if (a != b) return options.fn(this);
        else return options.inverse(this);
    },
    ifnoteq: (a, b, options) => {
        if (a != b - 1) return options.fn(this);
        else return options.inverse(this);
    },
    iflower: (a, b, options) => {
        console.log(a);
        console.log(b);
        // @ts-ignore
        if (a < b) return options.fn(this);
        // @ts-ignore
        else return options.inverse(this);
    },
    ifabove: (a, b, options) => {
        // @ts-ignore
        if (a > b) return options.fn(this);
        // @ts-ignore
        else return options.inverse(this);
    },
}