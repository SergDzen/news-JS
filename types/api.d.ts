import type { Article } from './news';
import type { Source } from './source';
export declare enum ApiEndpoint {
    Sources = "sources",
    Everything = "everything"
}
export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
export interface SourcesResponse {
    status: string;
    sources: Source[];
}
//# sourceMappingURL=api.d.ts.map