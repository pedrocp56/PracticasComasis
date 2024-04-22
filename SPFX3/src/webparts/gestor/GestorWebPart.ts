import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './GestorWebPart.module.scss';

export interface IGestorWebPartProps {
}

export default class GestorWebPart extends BaseClientSideWebPart<IGestorWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.gestor }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
