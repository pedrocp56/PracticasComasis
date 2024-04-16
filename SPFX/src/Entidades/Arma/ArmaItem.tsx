import { ArmaLista } from "./ArmaLista";
import { IItem } from "@pnp/sp/items";

export class ArmaItem {
  public ListItem: any;
  public Lista: ArmaLista;
  public ItemEdit: ArmaItem;

  public Nombre: string;
  public Ataque: number;
  public Daño: string;
  public Tipo: string;
  public Arrojadiza: boolean;
  public Car: string;
  public Caracteristicas: string;
  public Foto: any;

  constructor(ListItem: IItem, Lista: ArmaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
  }

  public MapearCampos() {
    this.Nombre = this.ListItem.Arma_Nombre;
    this.Ataque = this.ListItem.Arma_Ataque;
    this.Daño = this.ListItem.Arma_Daño;
    this.Tipo = this.ListItem.Arma_Tipo;
    this.Arrojadiza = this.ListItem.Arma_Arrojadiza;
    this.Car = this.ListItem.Arma_Car;
    this.Caracteristicas = this.ListItem.Arma_Caracteristicas;
    this.Foto = this.ListItem.Arma_Foto;
  }
}
