import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
export interface IGestorPersonajesWebPartProps {
    description: string;
}
export default class GestorPersonajesWebPart extends BaseClientSideWebPart<IGestorPersonajesWebPartProps> {
    private SP;
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GestorPersonajesWebPart.d.ts.map