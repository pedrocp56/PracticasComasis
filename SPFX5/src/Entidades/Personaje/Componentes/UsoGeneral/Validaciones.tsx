/* eslint-disable no-new*/

//valida si es una URL
export function isValidUrl(url: string): boolean {
    if (url === null) {
        return true;
    }
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
/* eslint-enable */


