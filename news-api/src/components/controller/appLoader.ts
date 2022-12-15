import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi-redirect-production.up.railway.app/', {
            apiKey: '783925b410aa41ae83f3d039f18d4b75', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
