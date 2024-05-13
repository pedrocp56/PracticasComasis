/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ArmaLista } from "./ArmaLista";

export interface ArmaFotoLookup {
  ID: number;
  Url: string;
}

export class ArmaItem {
  public ListItem: any;
  public Lista: ArmaLista;
  public ItemEdit: ArmaItem;

  public ID: number;
  public Nombre: string;

  public Ataque: number;
  public Danho: string;
  public Tipo: string;
  public Arrojadiza: boolean;
  public Car: string;
  public Caracteristicas: string;
  public Foto: ArmaFotoLookup;

  constructor(ListItem: any, Lista: ArmaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
    if (ListItem !== null && ListItem !== undefined) {
      this.MapearCampos();
    }
  }

  public MapearCampos(): void {
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;

    this.Foto = this.ListItem.Arma_Foto;
  }

  public async updateItem(): Promise<boolean> {
    console.log("Entrando Update");
    let needUpdate = false;
    const item: any = {};

    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }
    if (this.ItemEdit.Ataque !== this.Ataque) {
      item.Arma_Ataque = this.ItemEdit.Ataque;
      needUpdate = true;
    }
    if (this.ItemEdit.Danho !== this.Danho) {
      item.Arma_Danho = this.ItemEdit.Danho;
      needUpdate = true;
    }
    if (this.ItemEdit.Tipo !== this.Tipo) {
      item.Arma_Tipo = this.ItemEdit.Tipo;
      needUpdate = true;
    }
    if (this.ItemEdit.Arrojadiza !== this.Arrojadiza) {
      item.Arma_Arrojadiza = this.ItemEdit.Arrojadiza;
      needUpdate = true;
    }
    if (this.ItemEdit.Car !== this.Car) {
      item.Arma_Car = this.ItemEdit.Car;
      needUpdate = true;
    }
    if (this.ItemEdit.Caracteristicas !== this.Caracteristicas) {
      item.Arma_Caracteristicas = this.ItemEdit.Caracteristicas;
      needUpdate = true;
    }

    if (this.ItemEdit.Foto?.ID !== this.Foto?.ID) {
      item.LookupArmaFotoID = this.ItemEdit.Foto?.ID;
      needUpdate = true;
    }

    if (this.ID === null) {
      console.log("Creando Arma");
      console.log(item);
      await this.Lista.List.items.add(item);
      console.log("Arma creada");
      return true;
    }

    if (needUpdate) {
      console.log("NeedUpdate");
      await this.Lista.List.items
        .getById(this.ListItem.ID)
        .update(item)
        .then((result) => {
          console.log("Actualizando");
          this.ListItem = result;
          this.MapearCampos();
          return true;
        });
    } else return false;
  }

  public async deleteArma(): Promise<void> {
    try {
      await this.Lista.List.items.getById(this.ID).delete();
      console.log(`Arma con ID ${this.ID} eliminada exitosamente.`);
    } catch (error) {
      console.error("Error al eliminar el Arma:", error);
      throw new Error("Error al eliminar el Arma");
    }
  }
}

/* eslint-enable */
