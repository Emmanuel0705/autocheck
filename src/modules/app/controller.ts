import { Controller, Get } from "@nestjs/common";
import AppService from "@app/service";

@Controller("api")
class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("top-ten-words")
    async getFirst(): Promise<any> {
        return await this.appService.getTenMostOccuringTitle();
    }

    @Get("ttw-last-week")
    async Seconnd(): Promise<any> {
        return await this.appService.getLastWeekMostOccuringWords();
    }
    @Get("ttw-user-karma")
    async getNodes(): Promise<any> {
        return await this.appService.getTenMostOccuringTitle();
    }
}

export default AppController;
