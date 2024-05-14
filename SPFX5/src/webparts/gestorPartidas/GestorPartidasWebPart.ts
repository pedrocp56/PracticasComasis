import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDom from "react-dom";

import * as strings from "GestorPartidasWebPartStrings";

import { SPFI, SPFx, spfi } from "@pnp/sp/presets/all";
import GestorCampañasCompWebpart from "./components/GestorCampañas";
import GestorPersonajeArmaCompWebpart from "./components/GestorPersonajeArma";
import GestorPersonajesCompWebpart from "./components/GestorPersonajes";
import GestorArmasCompWebpart from "./components/GestorArmas";

export interface IGestorPartidasWebPartProps {
  description: string;
}


export default class GestorPartidasWebPart extends BaseClientSideWebPart<IGestorPartidasWebPartProps> {
  private SP: SPFI;

  readonly CAMPAÑA_PAGE: string = "Campañas.aspx";
  readonly ARMAS_PAGE: string = "Armas.aspx";
  readonly PERSONAJES_PAGE: string = "Personajes.aspx";
  readonly PERSONAJES_ARMAS_PAGE: string = "Personajes_Armas.aspx";




  public render(): void {

    if (location.href.indexOf("SitePages") > -1) {
      const url = location.href.split("?")[0];
      const pageName = decodeURIComponent(
        url.split("/")[url.split("/").length - 1]
      ).toLowerCase();
      let element: React.ReactElement;
      const webpartProps = {
        SP: this.SP,
        WebPartContext: this.context,
      };
      console.log(pageName);
      
      switch (pageName) {
        case this.ARMAS_PAGE.toLowerCase():
          element = React.createElement(GestorArmasCompWebpart, webpartProps);
          console.log("Cargando Armas");
          break;
        case this.CAMPAÑA_PAGE.toLowerCase():
          element = React.createElement(GestorCampañasCompWebpart, webpartProps);
          console.log("Cargando Campañas");
          break;
        case this.PERSONAJES_PAGE.toLowerCase():
          element = React.createElement(GestorPersonajesCompWebpart, webpartProps);
          console.log("Cargando Personajes");
          break;
        case this.PERSONAJES_ARMAS_PAGE.toLowerCase():
          element = React.createElement(GestorPersonajeArmaCompWebpart, webpartProps);
          console.log("Cargando Personajes-Arma");
          break;
        default:
          element = React.createElement(GestorCampañasCompWebpart, webpartProps);
          break;
      }
      ReactDom.render(element, this.domElement);
    }
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
