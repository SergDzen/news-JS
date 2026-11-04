import AppLoader from './appLoader';
import type { Callback } from './loader';
import type { NewsResponse, SourcesResponse } from '../../types/api';
declare class AppController extends AppLoader {
    getSources(callback: Callback<SourcesResponse>): void;
    getNews(e: MouseEvent, callback: Callback<NewsResponse>): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map