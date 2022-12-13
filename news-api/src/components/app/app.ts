import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDrawNewsData } from '../view/appView';
import { IDrawSourcesData } from '../view/appView';
import Footer from '../view/footer/footer'


export interface IApp {
    start: () => void;
}

class App {
    controller: AppController;
    view: AppView;
    footer: Footer;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.footer= new Footer();
    }

    start() {
        const sources: HTMLDivElement = document.querySelector('.sources') as HTMLDivElement;
        if (sources) sources.addEventListener('click', (e) => this.controller.getNews(e, (data?: IDrawNewsData) => this.view.drawNews(data)));
        this.controller.getSources((data?: IDrawSourcesData) => this.view.drawSources(data));
        this.footer.render();
    }

}

export default App;
