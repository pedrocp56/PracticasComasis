/* eslint-disable @typescript-eslint/no-explicit-any*/
import { isValidUrl } from "../Generales/Validaciones";
import { CampañaLista } from "./CampañaLista";
import { IItem } from "@pnp/sp/items";

export interface ComasisUser {
  Title: string;
  ID: number;
  EMail: string;
}
export class CampañaItem {
  public ListItem: any;
  public Lista: CampañaLista;
  public ItemEdit: CampañaItem;

  public ID: number;
  public Nombre: string;
  public Descripcion: string;
  public Fecha: Date;
  public Foto: any;
  public Master: ComasisUser;

  constructor(ListItem: IItem, Lista: CampañaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
    if (ListItem !== null && ListItem !== undefined) {
      this.MapearCampos();
    }
  }

  public MapearCampos(): void {
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;
    this.Descripcion = this.ListItem.Campanha_Descripcion;
    this.Fecha = this.ListItem.Campanha_Fecha ? new Date(this.ListItem.Campanha_Fecha) : null;
    this.Foto = this.ListItem.Campanha_Foto;
    this.Master = this.ListItem.Author;
  }

  public async updateItem(): Promise<boolean> {
    console.log("Entrando Update");
    let needUpdate = false;
    const item: any = {};
    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }
    if (this.ItemEdit.Descripcion !== this.Descripcion) {
      item.Campanha_Descripcion = this.ItemEdit.Descripcion;
      needUpdate = true;
    }
    if (this.ItemEdit.Fecha !== this.Fecha) {
      item.Campanha_Fecha = this.ItemEdit.Fecha;
      needUpdate = true;
    }
    if (this.ItemEdit.Foto !== this.Foto?.Url) {
      if (
        isValidUrl(this.ItemEdit.Foto?.Url) ||
        this.ItemEdit.Foto?.Url === ""
      ) {
        item.Campanha_Foto = { Url: this.ItemEdit.Foto?.Url };
        needUpdate = true;
      } else {
        console.log("La URL de la imagen no es válida");
      }
    }
    if (this.ItemEdit.Master?.ID !== this.Master?.ID || this.ID === null) {
      item.AuthorId = this.ItemEdit.Master?.ID;
      needUpdate = true;
    }

    if (this.ID === null) {
      console.log("Creando Campaña");
      await this.Lista.List.items.add(item);
      console.log("Campaña creada");
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

  public async deleteCampaña(): Promise<void> {
    try {
      await this.Lista.List.items.getById(this.ID).delete();
      console.log(`Campaña con ID ${this.ID} eliminado exitosamente.`);
    } catch (error) {
      console.error("Error al eliminar el Campaña:", error);
      throw new Error("Error al eliminar el Campaña");
    }
  }
}
/* eslint-enable */