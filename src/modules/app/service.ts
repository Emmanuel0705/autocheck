import { Injectable } from "@nestjs/common";
import HarkerNews from "../../services/harkerNews";

@Injectable()
class AppService {
    constructor(private readonly harkerNews: HarkerNews) {}

    async getTenMostOccuringTitle() {
        const newStories = (
            (await this.harkerNews.getNewStories()) as any
        ).data.slice(0, 25);

        const getAllStories = newStories.map(async (id: string) => {
            return ((await this.harkerNews.getStoryById(id)) as any).data;
        });

        const allStories = await Promise.all(getAllStories);
        const extractTitle = allStories.map((story: any) => story.title);

        const titileToSting = extractTitle
            .join(" ")
            .toLowerCase()
            .replace(/\d+/g, "")
            .replace(/'s/g, "");
        const wordArr = titileToSting.match(/\w+/g);

        let occurances: any = {};

        for (let word of wordArr) {
            if (occurances[word]) {
                occurances[word]++;
            } else {
                occurances[word] = 1;
            }
        }

        const topTen = Object.fromEntries(
            Object.entries(occurances)
                .sort(([, a]: any, [, b]: any) => b - a)
                .slice(0, 10)
        );

        return {
            success: "success",
            topTen,
        };
    }
    async getLastWeekMostOccuringWords() {
        return {
            success: "success",
            message:
                "story timestamp was returning earlier date (1970)..........",
        };
    }

    async getMostOccuringWordWithUserKarma() {
        return {
            success: "success",
            message: "could'nt find the endpoint on the documentation",
        };
    }
}

export default AppService;
