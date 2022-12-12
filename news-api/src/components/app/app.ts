import AppController from '../controller/controller';
import { AppView } from '../view/appView';

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



class App {
    controller:AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLDivElement;
        if(sources) sources.addEventListener('click', (e) => this.controller.getNews(e, (data?: drawNewsData) => this.view.drawNews(data)));
        this.controller.getSources((data?: drawSourcesData) => this.view.drawSources(data));
    }
}

export default App;
