import type { Source } from '../../../types/source';

class Sources {
    draw(data: { id: string; name: string }[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            throw new Error('Source template not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item');

            if (!sourceName || !sourceItem) {
                throw new Error('Source template elements not found');
            }

            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (!sourcesContainer) {
            throw new Error('Sources container not found');
        }

        sourcesContainer.append(fragment);
    }
}

export default Sources;