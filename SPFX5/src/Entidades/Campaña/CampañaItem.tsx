/* eslint-disable @typescript-eslint/no-explicit-any*/
import { isValidUrl } from "../Generales/Validaciones";
import { CampañaLista } from "./CampañaLista";
import { IItem } from "@pnp/sp/items";

export class CampañaItem {
  public ListItem: any;
  public Lista: CampañaLista;
  public ItemEdit: CampañaItem;

  public ID: number;
  public Nombre: string;
  public Descipcion: string;
  public Foto: any;

  constructor(ListItem: IItem, Lista: CampañaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
  }

  public MapearCampos():void{
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;
    this.Descipcion = this.ListItem.Campanha_Descripcion;
    this.Foto = this.ListItem.Campaña_Foto;
  }

  public async updateItem(): Promise<boolean> {
    console.log("Entrando Update");
    let needUpdate = false;
    const item: any = {};
    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }
    if (this.ItemEdit.Descipcion !== this.Descipcion) {
      item.Campanha_Descripcion = this.ItemEdit.Descipcion;
      needUpdate = true;
    }
    if (this.ItemEdit.Foto !== this.Foto?.Url) {
      if (
        isValidUrl(this.ItemEdit.Foto?.Url) ||
        this.ItemEdit.Foto?.Url === ""
      ) {
        item.Personaje_Foto = { Url: this.ItemEdit.Foto?.Url };
        needUpdate = true;
      } else {
        console.log("La URL de la imagen no es válida");
      }
    }
    if (this.ID === null) {
      console.log("Creando Campaña");
      console.log(item);
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