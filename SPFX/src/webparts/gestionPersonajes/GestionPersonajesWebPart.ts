import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from "GestionPersonajesWebPartStrings";
import GestorPersonajesWebPart, {IGestorPersonajesWebPartProps,} from "./componentes/GestionPersonajesWebPart";
import { SPFI, SPFx, spfi } from "@pnp/sp/presets/all";

export interface IGestorPersonajesWebPartWebPartProps {
  description: string;
}

export default class GestorPersonajesWebPartWebPart extends BaseClientSideWebPart<IGestorPersonajesWebPartWebPartProps> {

  private SP:SPFI;
  //private _isDarkTheme: boolean = false;
  //private _environmentMessage: string = '';

  public render(): void {
    const webpartProps = {
      SP: this.SP,
      WebPartContext: this.context,
    };
    const element: React.ReactElement<IGestorPersonajesWebPartProps> =
      React.createElement(GestorPersonajesWebPart, webpartProps);
    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    this.SP = spfi().using(SPFx(this.context));
    return super.onInit(); 
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}