import axios from "axios";
class HarkerNews {
    async getNewStories(): Promise<any> {
        return await axios.get(
            "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
        );
    }
    async getStoryById(id: string): Promise<any> {
        return await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        );
    }
}

export default HarkerNews;
