"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const harkerNews_1 = tslib_1.__importDefault(require("../../services/harkerNews"));
let AppService = class AppService {
    harkerNews;
    constructor(harkerNews) {
        this.harkerNews = harkerNews;
    }
    async getTenMostOccuringTitle() {
        const newStories = (await this.harkerNews.getNewStories()).data.slice(0, 25);
        const getAllStories = newStories.map(async (id) => {
            return (await this.harkerNews.getStoryById(id)).data;
        });
        const allStories = await Promise.all(getAllStories);
        const extractTitle = allStories.map((story) => story.title);
        const titileToSting = extractTitle
            .join(" ")
            .toLowerCase()
            .replace(/\d+/g, "")
            .replace(/'s/g, "");
        const wordArr = titileToSting.match(/\w+/g);
        let occurances = {};
        for (let word of wordArr) {
            if (occurances[word]) {
                occurances[word]++;
            }
            else {
                occurances[word] = 1;
            }
        }
        const topTen = Object.fromEntries(Object.entries(occurances)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10));
        return {
            success: "success",
            topTen,
        };
    }
    async getLastWeekMostOccuringWords() {
        return {
            success: "success",
            message: "story timestamp was returning earlier date (1970)..........",
        };
    }
    async getMostOccuringWordWithUserKarma() {
        return {
            success: "success",
            message: "could'nt find the endpoint on the documentation",
        };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [harkerNews_1.default])
], AppService);
exports.default = AppService;
//# sourceMappingURL=service.js.map