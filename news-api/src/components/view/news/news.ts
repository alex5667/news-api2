import './news.css';
export interface Data {
    "source": {
        "id": number,
        "name": string
    },
    "author": string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string,
    "publishedAt": string,
    "content": string,
}



class News {
    draw(data: readonly Data[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;
            const newsItem = newsClone.querySelector('.news__item');
            if (idx % 2) newsItem && newsItem.classList.add('alt');
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
            if (newsMetaPhoto) newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                })`;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone.querySelector('.news__meta-author');
            if (newsMetaDate) newsMetaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            const newsDescriptionTitle = newsClone.querySelector('.news__meta-author');
            if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource = newsClone.querySelector('.news__description-source');
            if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent = newsClone.querySelector('.news__description-content');
            if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;
            const newsReadMoreA = newsClone.querySelector('.read-more a');
            if (newsReadMoreA) newsReadMoreA.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const NewsFragment = document.querySelector('.news')
        if (NewsFragment) {
            NewsFragment.innerHTML = '';
            NewsFragment.appendChild(fragment);
        }
    }
}

export default News;
