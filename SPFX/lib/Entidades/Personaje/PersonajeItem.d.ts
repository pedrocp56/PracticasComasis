import { PersonajeLista } from "./PersonajeLista";
import { IItem } from "@pnp/sp/items";
export declare class PersonajeItem {
    ListItem: any;
    Lista: PersonajeLista;
    ItemEdit: PersonajeItem;
    Nombre: string;
    Jugador: any;
    Clase: string;
    Nivel: number;
    Raza: string;
    Alinamiento: string;
    Estado: string;
    Edad: number;
    Altura: number;
    Peso: number;
    Ojos: string;
    Piel: string;
    Pelo: string;
    Foto: any;
    constructor(ListItem: IItem, Lista: PersonajeLista);
    MapearCampos(): void;
}
//# sourceMappingURL=PersonajeItem.d.ts.map