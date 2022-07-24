"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initExpress = void 0;
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = require("express-handlebars");
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var utils_1 = require("./utils");
var routers_1 = require("./routers");
var initExpress = function (config) {
    var expressApp = (0, express_1.default)();
    expressApp.set("views", utils_1.dirsName.resourcesViews);
    expressApp.set("view engine", "hbs");
    expressApp.set('view cache', true);
    expressApp.engine("hbs", (0, express_handlebars_1.engine)({
        extname: ".hbs",
        defaultLayout: "default",
        helpers: {
            "ifnoteq": utils_1.hbsHelpers.ifnoteq,
            "iflower": utils_1.hbsHelpers.iflower,
            "ifabove": utils_1.hbsHelpers.ifabove,
            "ifeq": utils_1.hbsHelpers.ifeq,
        }
    }));
    expressApp.use((0, cors_1.default)());
    // middlewares
    expressApp.use((0, cookie_parser_1.default)());
    expressApp.use(express_1.default.json());
    expressApp.use(express_1.default.urlencoded({ extended: false }));
    // routes
    console.log(utils_1.dirsName.publicFolder);
    expressApp.use(express_1.default.static(utils_1.dirsName.publicFolder));
    expressApp.use(function (req, res, next) {
        console.log(req.method + " " + req.url + " " + req.ip + " " + req.hostname + " " + new Date().toString());
        for (var _i = 0, Routers_1 = routers_1.Routers; _i < Routers_1.length; _i++) {
            var router = Routers_1[_i];
            if (router.method == req.method && router.urlPath == req.url) {
                res.render(router.filePath, router.renderOptions);
                return;
            }
        }
        res.sendStatus(404);
        return;
    });
    return expressApp;
};
exports.initExpress = initExpress;
exports.default = { initExpress: exports.initExpress };
