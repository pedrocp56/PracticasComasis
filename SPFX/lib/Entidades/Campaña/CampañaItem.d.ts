import { CampañaLista } from "./CampañaLista";
import { IItem } from "@pnp/sp/items";
export declare class CampañaItem {
    ListItem: any;
    Lista: CampañaLista;
    ItemEdit: CampañaItem;
    ID: number;
    Nombre: string;
    Descipcion: number;
    Foto: any;
    constructor(ListItem: IItem, Lista: CampañaLista);
    MapearCampos(): void;
}
//# sourceMappingURL=Campa%C3%B1aItem.d.ts.map