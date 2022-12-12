import News from './news/news';
import Sources from './sources/sources';
import {INewsData} from './news/news';
import {ISourcesData} from './sources/sources';

export interface IDrawNewsData {
    status: string,
    totalResults: number,
    articles: INewsData[]
}
export interface IDrawSourcesData {
    status: string,
    sources: ISourcesData[]
}

export interface IAppView {
    drawNews: (data: IDrawNewsData | undefined) => void;
    drawSources:(data: IDrawSourcesData | undefined)=>void
}


export class AppView implements IAppView{
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDrawNewsData | undefined):void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDrawSourcesData | undefined):void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
