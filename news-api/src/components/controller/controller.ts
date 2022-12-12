import AppLoader from './appLoader';
import {IDrawNewsData} from '../view/appView';
import {IDrawSourcesData} from '../view/appView';




class AppController extends AppLoader {
    getSources(callback: ((data?: IDrawSourcesData) => void) | undefined):void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e:MouseEvent, callback:((data?: IDrawNewsData) => void) | undefined):void {
        let target:HTMLElement = e.target as HTMLElement;
        const newsContainer:HTMLElement = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId:string = target.getAttribute('data-source-id') as string;
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
