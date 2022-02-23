declare class HarkerNews {
    getNewStories(): Promise<any>;
    getStoryById(id: string): Promise<any>;
}
export default HarkerNews;
