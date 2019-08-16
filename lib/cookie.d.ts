interface CookieData {
    [key: string]: string;
}
interface WriteOption {
    path?: string;
    domain?: string;
    maxAge?: number | string;
    expires?: string;
    httpOnly?: boolean;
}
declare const cookie: {
    all(): CookieData;
    get(name: string): string | undefined;
    set(name: string, value: string, option: WriteOption): void;
};
export default cookie;
