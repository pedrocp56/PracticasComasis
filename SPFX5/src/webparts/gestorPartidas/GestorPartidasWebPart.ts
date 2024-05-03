import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "GestorPartidasWebPartStrings";

import { SPFI, SPFx, spfi } from "@pnp/sp/presets/all";
import GestorPersonajesCompWebpart, {
  IGestorPersonajesCompWebpartProps,
} from "./components/GestorPersonajes";

export interface IGestorPartidasWebPartProps {
  description: string;
}

export default class GestorPartidasWebPart extends BaseClientSideWebPart<IGestorPartidasWebPartProps> {
  private SP: SPFI;

  public render(): void {
    const webpartProps = {
      SP: this.SP,
      WebPartContext: this.context,
    };
    //cambiar nombre para cambiar de webpart
    /*
    const element: React.ReactElement<IGestorArmasCompWebpartProps> =
      React.createElement(GestorArmasCompWebpart, webpartProps);
      */
    const element: React.ReactElement<IGestorPersonajesCompWebpartProps> =
      React.createElement(GestorPersonajesCompWebpart, webpartProps);
    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    this.SP = spfi().using(SPFx(this.context));
    try {
      return super.onInit();
    } catch (error) {
      console.error(error);
    }
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
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
/* eslint-enable */
