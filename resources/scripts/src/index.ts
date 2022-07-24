import { ErrnoException } from "./typings/error";
import app from "./app/app";
import http from "http";

const server = http.createServer(app.initExpress());
server.listen(1000);
server.on("error", onError);
server.on("listening", onListening);

function onError(error: ErrnoException) {
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
	const addr = server.address();
	if (addr == null) {
		throw new Error("Address is null");
	}
	const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	console.log("Listening on " + bind);
}
