/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ArmaLista } from "./ArmaLista";

export class ArmaItem {
  public ListItem: any;
  public Lista: ArmaLista;
  public ItemEdit: ArmaItem;

  public ID: number;
  public Nombre: string;

  public Ataque: number;
  public Danho: string;
  public Tipo: string[];
  public Arrojadiza: boolean;
  public Car: string;
  public Caracteristicas: string;
  public Foto: any;

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
    this.Ataque = this.ListItem.Arma_Ataque;
    this.Danho = this.ListItem.Arma_Danho;
    this.Tipo = this.ListItem.Arma_Tipo;
    this.Arrojadiza = this.ListItem.Arma_Arrojadiza;
    this.Car = this.ListItem.Arma_Car;
    this.Caracteristicas = this.ListItem.Arma_Caracteristicas;
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
    if (this.ID === null || this.ItemEdit.Ataque !== this.Ataque) {
      item.Arma_Ataque = this.ItemEdit.Ataque;
      needUpdate = true;
    }
    if (this.ID === null || this.ItemEdit.Danho !== this.Danho) {
      item.Arma_Danho = this.ItemEdit.Danho;
      needUpdate = true;
    }
    if (this.ItemEdit.Tipo !== this.Tipo) {
      item.Arma_Tipo = this.ItemEdit.Tipo;
      needUpdate = true;
    }
    if (this.ID === null || this.ItemEdit.Arrojadiza !== this.Arrojadiza) {
      item.Arma_Arrojadiza = this.ItemEdit.Arrojadiza;
      needUpdate = true;
    }
    if (this.ID === null || this.ItemEdit.Car !== this.Car) {
      item.Arma_Car = this.ItemEdit.Car;
      needUpdate = true;
    }
    if (this.ItemEdit.Caracteristicas !== this.Caracteristicas) {
      item.Arma_Caracteristicas = this.ItemEdit.Caracteristicas;
      needUpdate = true;
    }

    if (this.ItemEdit?.Foto?.Url !== this.Foto?.Url) {
      //item.Arma_Foto = {Url: this.ItemEdit.Foto?.Url };.
      item.Arma_Foto = { Description: this.ItemEdit.Foto?.Description.toString(), Url: this.ItemEdit.Foto?.Url };
      needUpdate = true;
    }

    if (this.ID === null) {
      console.log("Creando Arma");
      await this.Lista.List.items.add(item);
      console.log("Arma creada");
      return true;
    }
    //MIRAR ARON PARA CAMBIAR
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
