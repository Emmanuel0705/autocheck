"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
class HarkerNews {
    async getNewStories() {
        return await axios_1.default.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");
    }
    async getStoryById(id) {
        return await axios_1.default.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    }
}
exports.default = HarkerNews;
//# sourceMappingURL=harkerNews.js.map