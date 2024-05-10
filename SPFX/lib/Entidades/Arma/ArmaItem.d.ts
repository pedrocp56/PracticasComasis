import { ArmaLista } from "./ArmaLista";
export declare class ArmaItem {
    ListItem: any;
    Lista: ArmaLista;
    ItemEdit: ArmaItem;
    ID: number;
    Nombre: string;
    Ataque: number;
    Daño: string;
    Tipo: string[];
    Arrojadiza: boolean;
    Car: string;
    Caracteristicas: string;
    Foto: any;
    constructor(ListItem: any, Lista: ArmaLista);
    MapearCampos(): void;
}
//# sourceMappingURL=ArmaItem.d.ts.map