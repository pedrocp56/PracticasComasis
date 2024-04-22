import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './Prueba1WebPart.module.scss';

export interface IPrueba1WebPartProps {
}

export default class Prueba1WebPart extends BaseClientSideWebPart<IPrueba1WebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.prueba1 }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
