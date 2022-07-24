import express from "express";
import {  engine as hbsEngineConfig } from "express-handlebars"
import cors from "cors";
import cookieParser from "cookie-parser";
import { dirsName, hbsHelpers } from "./utils";
import { Routers } from "./routers";

export const initExpress = (config?: IConfig) => {
	const expressApp = express();

	expressApp.set("views", dirsName.resourcesViews);
	expressApp.set("view engine", "hbs");
	expressApp.set('view cache', true);
	expressApp.engine(
		"hbs",
		hbsEngineConfig({
			extname: ".hbs",
			defaultLayout: "default",
			helpers: {
				"ifnoteq": hbsHelpers.ifnoteq,
				"iflower": hbsHelpers.iflower,
				"ifabove": hbsHelpers.ifabove,
				"ifeq": hbsHelpers.ifeq,
			}
		})
	);


	expressApp.use(cors());

	// middlewares
	expressApp.use(cookieParser());
	expressApp.use(express.json());
	expressApp.use(express.urlencoded({ extended: false }));
	// routes

	console.log(dirsName.publicFolder)
	expressApp.use(express.static(dirsName.publicFolder));
	expressApp.use((req, res, next) => {
		console.log(req.method + " " + req.url + " " + req.ip + " " + req.hostname + " " + new Date().toString());
		for (const router of Routers) {
			if(router.method == req.method && router.urlPath == req.url) {
				res.render(router.filePath, router.renderOptions);
				return;
			}
		}
		
		res.sendStatus(404);

		
		
		return;
	});
	

	return expressApp
}

export default { initExpress };