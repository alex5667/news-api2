import './sources.css';

export interface ISourcesData {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}


class Sources {
    draw(data: ISourcesData[]) {
        const fragment:DocumentFragment = document.createDocumentFragment()as DocumentFragment;
        const sourceItemTemp:HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone:Element = sourceItemTemp.content.cloneNode(true) as Element;
            const sourceItemName:Element = sourceClone.querySelector('.source__item-name') as Element;
            if (sourceItemName) sourceItemName.textContent = item.name;
            const sourceItem:Element = sourceClone.querySelector('.source__item') as Element;
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sourcesFragment:Element = document.querySelector('.sources')as Element;
        if (sourcesFragment) sourcesFragment.append(fragment);
    }
}

export default Sources;
