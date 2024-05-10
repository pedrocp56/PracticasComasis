import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IWeb } from "@pnp/sp/presets/all";
import { ArmaItem } from "./ArmaItem";
import "@pnp/sp/presets/all";
import "@pnp/sp/lists";
export declare class ArmaLista {
    NombreLista: string;
    SelectAllFields: string[];
    ExpandAllFields: string[];
    web: IWeb;
    Context: WebPartContext;
    List: IList;
    constructor(web: IWeb, context: WebPartContext);
    CargarTodos(BatchedWeb?: IWeb): Promise<ArmaItem[]>;
}
//# sourceMappingURL=ArmaLista.d.ts.map