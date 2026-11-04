import type { ApiEndpoint } from '../../types/api';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type RequestOptions = Record<string, string>;
export interface RequestConfig {
    endpoint: ApiEndpoint;
    options?: RequestOptions;
}
export type Callback<T> = (data: T) => void;
declare class Loader {
    private baseLink;
    private options;
    constructor(baseLink: string, options: RequestOptions);
    getResp<T>({ endpoint, options }: RequestConfig, callback?: Callback<T>): void;
    private errorHandler;
    private makeUrl;
    private load;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map