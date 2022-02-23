import { Module } from "@nestjs/common";
import AppController from "@app/controller";
import AppService from "@app/service";
import HarkerNews from "@services/harkerNews";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, HarkerNews],
})
export default class AppModule {}
