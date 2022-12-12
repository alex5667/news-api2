import './news.css';
export interface INewsData {
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



class News {
    draw(data: INewsData[]) {
        const news:INewsData [] = data.length >= 10 ? data.filter((_item:INewsData, idx:number) => idx < 10) : data;
        const fragment:DocumentFragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        news.forEach((item, idx) => {
            const newsClone:Element = newsItemTemp.content.cloneNode(true) as Element;
            const newsItem:Element = newsClone.querySelector('.news__item') as Element;
            if (idx % 2) newsItem && newsItem.classList.add('alt');
            const newsMetaPhoto:HTMLTemplateElement = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
            if (newsMetaPhoto) newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                })`;
            const newsMetaAuthor:Element = newsClone.querySelector('.news__meta-author')as Element;
            if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate:Element = newsClone.querySelector('.news__meta-author')as Element;
            if (newsMetaDate) newsMetaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            const newsDescriptionTitle:Element = newsClone.querySelector('.news__meta-author') as Element;
            if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource:Element = newsClone.querySelector('.news__description-source')as Element;
            if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent:Element = newsClone.querySelector('.news__description-content') as Element;
            if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;
            const newsReadMoreA:Element = newsClone.querySelector('.read-more a') as Element;
            if (newsReadMoreA) newsReadMoreA.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const NewsFragment:Element = document.querySelector('.news')as Element;
        if (NewsFragment) {
            NewsFragment.innerHTML = '';
            NewsFragment.appendChild(fragment);
        }
    }
}

export default News;
