/* eslint-disable @typescript-eslint/no-explicit-any*/
import { PersonajeArmaLista } from "./PersonajeArmaLista";

export interface PersonajeLookup {
  ID: number;
  Title: string;
  BFuerza: number;
  BDestreza: number;
  BConstitucion: number;
  BInteligencia: number;
  BSabiduria: number;
  BCarisma: number;
  BCompetencia:number;
}
export interface ArmaLookup {
  ID: number;
  Title: string;
  Arma_Ataque: number;
  Arma_Danho: number;
  //Arma_Tipo: string[];
  //Arma_Arrojadiza: boolean;
  Arma_Car: string;
  //Arma_Caracteristicas: string;
}

export class PersonajeArmaItem {
  public ListItem: any;
  public Lista: PersonajeArmaLista;
  public ItemEdit: PersonajeArmaItem;

  public ID: number;
  public Nombre: string;

  public Personaje: PersonajeLookup;
  public Arma: ArmaLookup;

  public Competencia: boolean;
  public Bonificacion: number;
  nuevo: {};

  constructor(ListItem: any, Lista: PersonajeArmaLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
    if (ListItem !== null && ListItem !== undefined) {
      this.MapearCampos();
    }
  }

  public MapearCampos(): void {
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;  
    
    this.Personaje = this.ListItem.LookupPersonaje !== null&&this.ListItem.LookupPersonaje !== undefined ? {
      ID:this.ListItem.LookupPersonaje.ID,
      Title:this.ListItem.LookupPersonaje.Title,
      BFuerza:calcularBono(this.ListItem.LookupPersonaje.Caracteristica_Fuerza),
      BDestreza:calcularBono(this.ListItem.LookupPersonaje.Caracteristica_Destreza),
      BConstitucion:calcularBono(this.ListItem.LookupPersonaje.Caracteristica_Constitucion),
      BInteligencia:calcularBono(this.ListItem.LookupPersonaje.Caracteristica_Inteligencia),
      BSabiduria:calcularBono(this.ListItem.LookupPersonaje.Caracteristica_Sabiduria),
      BCarisma:calcularBono(this.ListItem.LookupPersonaje.Caracteristica_Carisma),
      BCompetencia:this.ListItem.LookupPersonaje.Bono_Competencia,
    }:null;
    this.Arma = this.ListItem.LookupArma;
  
    this.Competencia = this.ListItem.Competencia;
    this.Bonificacion = this.ListItem.Bonificacion_Adiccional;

  }

  public async updateItem(): Promise<boolean> {
    console.log("Entrando Update");
    let needUpdate = false;
    const item: any = {};
    console.log(this.ItemEdit.Personaje);
    console.log(this.ItemEdit.Arma);    
    
    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }
    if (this.ID === null ||this.ItemEdit.Personaje?.ID !== this.Personaje?.ID) {
      item.LookupPersonajeId = this.ItemEdit.Personaje?.ID;
      needUpdate = true;
    }
    if (this.ID === null ||this.ItemEdit.Arma?.ID !== this.Arma?.ID) {
      item.LookupArmaId = this.ItemEdit.Arma?.ID;
      needUpdate = true;
    }
    if (this.ID === null || this.ItemEdit.Competencia !== this.Competencia) {
      item.Competencia = this.ItemEdit.Competencia;
      needUpdate = true;
    }
    if (this.ID === null || this.ItemEdit.Bonificacion !== this.Bonificacion) {
      item.Bonificacion_Adiccional = this.ItemEdit.Bonificacion;
      needUpdate = true;
    }

    if (this.ID === null) {
      console.log("Creando personaje-arma");
      await this.Lista.List.items.add(item);
      console.log("Personaje-arma creada");
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

  public async deletePersonajeArma(): Promise<void> {
    try {
      await this.Lista.List.items.getById(this.ID).delete();
      console.log(`Personaje-arma con ID ${this.ID} eliminado exitosamente.`);
    } catch (error) {
      console.error("Error al eliminar el Personaje-arma:", error);
      throw new Error("Error al eliminar el Personaje-arma");
    }
  }
}
function calcularBono(caracteristica: number): number {
  const bono = (caracteristica - 10) / 2;
  return Math.floor(bono);
}

/* eslint-enable */
