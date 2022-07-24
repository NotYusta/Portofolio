import { IRouterData } from "../typings/data";
export const HomeRouter: IRouterData = {
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

export const Routers: IRouterData[] = [HomeRouter];
