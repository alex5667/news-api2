import News from './news/news';
import Sources from './sources/sources';

export interface SourcesData {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}

export interface NewsData {
    source: {
        id: number,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}



export interface drawNewsData {
    status: string,
    totalResults: number,
    articles: NewsData[]
}

export interface drawSourcesData {
    status: string,
    sources: SourcesData[]
}


export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: drawNewsData) {
        const values = data?.articles ? data?.articles : [];

        this.news.draw(values);
    }

    drawSources(data: drawSourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
