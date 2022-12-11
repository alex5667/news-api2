import './sources.css';

export interface SourcesData {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}


class Sources {
    draw(data: readonly SourcesData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp')as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
            const sourceItemName =sourceClone.querySelector('.source__item-name');
            if(sourceItemName)sourceItemName.textContent = item.name;
            const sourceItem=sourceClone.querySelector('.source__item');
            if(sourceItem) sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sourcesFragment= document.querySelector('.sources');
        if(sourcesFragment) sourcesFragment.append(fragment);
    }
}

export default Sources;
