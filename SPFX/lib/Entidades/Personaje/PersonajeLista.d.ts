import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IWeb } from "@pnp/sp/presets/all";
import { PersonajeItem } from "./PersonajeItem";
export declare class PersonajeLista {
    NombreLista: string;
    SelectAllFields: string[];
    ExpandAllFields: string[];
    web: IWeb;
    Context: WebPartContext;
    List: IList;
    constructor(web: IWeb, context: WebPartContext);
    CargarTodos(BatchedWeb?: IWeb): Promise<PersonajeItem[] | void>;
}
//# sourceMappingURL=PersonajeLista.d.ts.map