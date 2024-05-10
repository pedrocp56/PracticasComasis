var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from "GestionPersonajesWebPartStrings";
import GestorPersonajesWebPart from "./componentes/GestionPersonajesWebPart";
import { SPFx, spfi } from "@pnp/sp/presets/all";
var GestorPersonajesWebPartWebPart = /** @class */ (function (_super) {
    __extends(GestorPersonajesWebPartWebPart, _super);
    function GestorPersonajesWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //private _isDarkTheme: boolean = false;
    //private _environmentMessage: string = '';
    GestorPersonajesWebPartWebPart.prototype.render = function () {
        var webpartProps = {
            SP: this.SP,
            WebPartContext: this.context,
        };
        var element = React.createElement(GestorPersonajesWebPart, webpartProps);
        ReactDom.render(element, this.domElement);
    };
    GestorPersonajesWebPartWebPart.prototype.onInit = function () {
        this.SP = spfi().using(SPFx(this.context));
        return _super.prototype.onInit.call(this);
    };
    GestorPersonajesWebPartWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(GestorPersonajesWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    GestorPersonajesWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return GestorPersonajesWebPartWebPart;
}(BaseClientSideWebPart));
export default GestorPersonajesWebPartWebPart;
//# sourceMappingURL=GestionPersonajesWebPart.js.map