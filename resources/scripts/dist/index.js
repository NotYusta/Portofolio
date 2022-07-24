"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app/app"));
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(app_1.default.initExpress());
server.listen(1000);
server.on("error", onError);
server.on("listening", onListening);
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(1000 + " requires elevated privileges");
            process.exit(1);
        case "EADDRINUSE":
            console.error(1000 + " is already in use");
            process.exit(1);
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    if (addr == null) {
        throw new Error("Address is null");
    }
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
}
