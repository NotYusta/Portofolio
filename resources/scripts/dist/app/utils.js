"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hbsHelpers = exports.dirsName = void 0;
// @ts-nocheck
var path_1 = __importDefault(require("path"));
exports.dirsName = {
    publicFolder: path_1.default.join(__dirname, "../../../../public"),
    resourcesViews: path_1.default.join(__dirname, "../../../views"),
};
exports.hbsHelpers = {
    ifeq: function (a, b, options) {
        if (a == b)
            return options.fn(_this);
        else
            return options.inverse(_this);
    },
    ifnoteq: function (a, b, options) {
        if (a != b)
            return options.fn(_this);
        else
            return options.inverse(_this);
    },
    ifnoteq: function (a, b, options) {
        if (a != b - 1)
            return options.fn(_this);
        else
            return options.inverse(_this);
    },
    iflower: function (a, b, options) {
        console.log(a);
        console.log(b);
        // @ts-ignore
        if (a < b)
            return options.fn(_this);
        // @ts-ignore
        else
            return options.inverse(_this);
    },
    ifabove: function (a, b, options) {
        // @ts-ignore
        if (a > b)
            return options.fn(_this);
        // @ts-ignore
        else
            return options.inverse(_this);
    },
};
