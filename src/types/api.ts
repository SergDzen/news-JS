import type { Article } from './news';
import type { Source } from './source';

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}