import AppLoader from './appLoader';

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




class AppController extends AppLoader {
    getSources(callback: ((data?: drawSourcesData) => void) | undefined) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e:MouseEvent, callback:((data?: drawNewsData) => void) | undefined) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target =  (target.parentNode as HTMLElement);
        }
    }
}

export default AppController;
