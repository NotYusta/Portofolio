export interface IRouterData {
    urlPath: string;
    filePath: string;
    method: string;
    renderOptions: {
        pathName: string;
        layout: string;
        identity: {
            keywords: string[];
            title: string;
            description: string;
        };
    },
}