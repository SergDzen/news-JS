import { ApiEndpoint } from '../../types/api';
import AppLoader from './appLoader';
import type { Callback } from './loader';
import type { NewsResponse, SourcesResponse } from '../../types/api';

class AppController extends AppLoader {
    public getSources(callback: Callback<SourcesResponse>): void {
        super.getResp<SourcesResponse>(
            {
                endpoint: ApiEndpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: Callback<NewsResponse>): void {
        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }

        let target: EventTarget | null = e.target;

        while (target && target !== newsContainer) {
            if (target instanceof Element && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);

                    super.getResp<NewsResponse>(
                        {
                            endpoint: ApiEndpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target instanceof Element ? target.parentElement : null;
        }
    }
}

export default AppController;
