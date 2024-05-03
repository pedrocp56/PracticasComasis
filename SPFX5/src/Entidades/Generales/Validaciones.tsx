/* eslint-disable no-new*/

//valida si es una URL
export function isValidUrl(url: string): boolean {
  if (url === null || url === undefined || url === "") {
    console.log("a");
    return true;
  }
  try {
    new URL(url);
    console.log("b");
    return true;
  } catch (error) {
    console.log("c");
    return false;
  }
}
/* eslint-enable */
