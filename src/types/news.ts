import type { Source } from './source';
export interface Article {
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    source: ArticleSource;
}
export type ArticleSource = Pick<Source, 'name'> & {
    id: string | null;
    };
export type ReadonlyArticle = Readonly<Article>;