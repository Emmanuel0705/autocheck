import AppService from "@app/service";
declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getFirst(): Promise<any>;
    Seconnd(): Promise<any>;
    getNodes(): Promise<any>;
}
export default AppController;
