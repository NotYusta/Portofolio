"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = exports.HomeRouter = void 0;
exports.HomeRouter = {
    urlPath: "/",
    method: "GET",
    filePath: "index",
    renderOptions: {
        pathName: "Portofolio",
        layout: "home",
        identity: {
            keywords: ["home", "index"],
            title: "Home",
            description: "Home page",
        },
    },
};
exports.Routers = [exports.HomeRouter];
