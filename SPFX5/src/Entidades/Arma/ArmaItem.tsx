/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ArmaLista } from "./ArmaLista";

export class ArmaItem {
  public ListItem: any;
  public Lista: ArmaLista;
  public ItemEdit: ArmaItem;

  public ID: number;
  public Nombre: string;
  public Ataque: number;
  public Daño: string;
  public Tipo: string[];
  public Arrojadiza: boolean;
  public Car: string;
  public Caracteristicas: string;
  public Foto: any;

  constructor(ListItem: any, Lista: ArmaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
    this.MapearCampos();
  }

  public MapearCampos(): void {
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;
    this.Ataque = this.ListItem.Arma_Ataque;
    this.Daño = this.ListItem.Arma_Da_x00f1_o;
    this.Tipo = this.ListItem.Arma_Tipo;
    this.Arrojadiza = this.ListItem.Arma_Arrojadiza;
    this.Car = this.ListItem.Arma_Car;
    this.Caracteristicas = this.ListItem.Arma_Caracteristicas;
    this.Foto = this.ListItem.Arma_Foto;
  }

  public async updateItem(): Promise<boolean> {

    let needUpdate = false;
    const item: any = {}
    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }
    if (this.ItemEdit.Ataque !== this.Ataque) {
      item.Arma_Ataque = this.ItemEdit.Ataque;
      needUpdate = true;
    }
    if (this.ItemEdit.Daño !== this.Daño) {
      item.Arma_Da_x00f1_o = this.ItemEdit.Daño;
      needUpdate = true;
    }
    if (this.ItemEdit.Car !== this.Car) {
      item.Arma_Car = this.ItemEdit.Car;
      needUpdate = true;
    }
    
    
    if (needUpdate) {
      await this.Lista.List.items.getById(this.ListItem.ID).update(item).then((result) => {
        console.log("Actualizando");
        this.ListItem = result;
        this.MapearCampos();
        return true;
      });

    }
    else return false;
  }
}
/* eslint-enable */