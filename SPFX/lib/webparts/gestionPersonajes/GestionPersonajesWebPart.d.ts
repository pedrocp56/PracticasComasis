import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IGestorPersonajesWebPartWebPartProps {
    description: string;
}
export default class GestorPersonajesWebPartWebPart extends BaseClientSideWebPart<IGestorPersonajesWebPartWebPartProps> {
    private SP;
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GestionPersonajesWebPart.d.ts.map