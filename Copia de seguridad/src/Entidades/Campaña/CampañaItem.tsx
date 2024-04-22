/* eslint-disable @typescript-eslint/no-explicit-any*/
import { CampañaLista } from "./CampañaLista";
import { IItem } from "@pnp/sp/items";

export class CampañaItem {
  public ListItem: any;
  public Lista: CampañaLista;
  public ItemEdit: CampañaItem;

  public ID: number;
  public Nombre: string;
  public Descipcion: number;
  public Foto: any;

  constructor(ListItem: IItem, Lista: CampañaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
  }

  public MapearCampos():void{
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;
    this.Descipcion = this.ListItem.Campaña_Descripcion;
    this.Foto = this.ListItem.Campaña_Foto;
  }
}
/* eslint-enable */