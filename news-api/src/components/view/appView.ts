import News from './news/news';
import Sources from './sources/sources';
import {INewsData} from './news/news'
import {ISourcesData} from './sources/sources'

export interface drawNewsData {
    status: string,
    totalResults: number,
    articles: INewsData[]
}
export interface drawSourcesData {
    status: string,
    sources: ISourcesData[]
}


export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: drawNewsData | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: drawSourcesData | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
