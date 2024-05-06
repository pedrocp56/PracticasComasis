/* eslint-disable no-new*/

//valida si es una URL
export function isValidUrl(url: string): boolean {
  if (url === null || url === undefined || url === "") {
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
