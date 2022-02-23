import HarkerNews from "../../services/harkerNews";
declare class AppService {
    private readonly harkerNews;
    constructor(harkerNews: HarkerNews);
    getTenMostOccuringTitle(): Promise<{
        success: string;
        topTen: {
            [k: string]: unknown;
        };
    }>;
    getLastWeekMostOccuringWords(): Promise<{
        success: string;
        message: string;
    }>;
    getMostOccuringWordWithUserKarma(): Promise<{
        success: string;
        message: string;
    }>;
}
export default AppService;
