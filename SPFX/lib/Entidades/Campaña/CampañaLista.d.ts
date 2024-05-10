import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IWeb } from "@pnp/sp/presets/all";
import { CampañaItem } from "./CampañaItem";
export declare class CampañaLista {
    NombreLista: string;
    SelectAllFields: string[];
    ExpandAllFields: string[];
    web: IWeb;
    Context: WebPartContext;
    List: IList;
    constructor(web: IWeb, context: WebPartContext);
    CargarTodos(BatchedWeb?: IWeb): Promise<CampañaItem[] | void>;
}
//# sourceMappingURL=Campa%C3%B1aLista.d.ts.map