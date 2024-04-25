/* eslint-disable no-new*/

//valida si es una URL
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
/* eslint-enable */


