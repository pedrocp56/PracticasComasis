/* eslint-disable @typescript-eslint/no-explicit-any*/
import { isValidUrl } from "../Generales/Validaciones";
import { PersonajeLista } from "./PersonajeLista";

export interface ComasisUser {
  Title: string;
  ID: number;
  EMail: string;
}

export interface CampañaLookup {
  ID: number;
  Title: string;
}

export interface ArmaLookup {
  ID: number;
  Title: string;
}

export class PersonajeItem {
  public ListItem: any;
  public Lista: PersonajeLista;
  public ItemEdit: PersonajeItem;

  public ID: number;
  public Nombre: string;
  public Usuario: ComasisUser;
  public UsuarioNombre: string;

  public Fuerza: number;
  public Destreza: number;
  public Constitucion: number;
  public Inteligencia: number;
  public Sabiduria: number;
  public Carisma: number;
  public Bono_Fuerza: number;
  public Bono_Destreza: number;
  public Bono_Constitucion: number;
  public Bono_Inteligencia: number;
  public Bono_Sabiduria: number;
  public Bono_Carisma: number;

  public Competencia: number;
  public Campaña: CampañaLookup;
  public ListaArmas: ArmaLookup[];
  public Foto: any;

  constructor(ListItem: any, Lista: PersonajeLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
    if (ListItem !== null && ListItem !== undefined) {
      this.MapearCampos();
    }
  }

  public MapearCampos(): void {
    this.ID = this.ListItem.ID;
    this.Nombre = this.ListItem.Title;
    this.Usuario = this.ListItem.Personaje_Usuario;
    this.UsuarioNombre =
      this.Usuario !== undefined && this.Usuario !== null
        ? this.Usuario.Title
        : "(vacío)";

    this.Fuerza = this.ListItem.Caracteristica_Fuerza;
    this.Bono_Fuerza = calcularBono(this.Fuerza);
    this.Destreza = this.ListItem.Caracteristica_Destreza;
    this.Bono_Destreza = calcularBono(this.Destreza);
    this.Constitucion = this.ListItem.Caracteristica_Constitucion;
    this.Bono_Constitucion = calcularBono(this.Constitucion);
    this.Inteligencia = this.ListItem.Caracteristica_Inteligencia;
    this.Bono_Inteligencia = calcularBono(this.Inteligencia);
    this.Sabiduria = this.ListItem.Caracteristica_Sabiduria;
    this.Bono_Sabiduria = calcularBono(this.Sabiduria);
    this.Carisma = this.ListItem.Caracteristica_Carisma;
    this.Bono_Carisma = calcularBono(this.Carisma);

    this.Competencia = this.ListItem.Bono_Competencia;

    this.Campaña = this.ListItem.LookupCampanha;
    console.log(this.Campaña);

    //console.log(this.Campaña?.Title);

    //console.log(this.ListItem.LookupArma);
    //console.log(this.ListItem.LookupArma[0]?.Title);  Me odio mucho a mi mismo
    if (this.ListItem.LookupArma) {
      this.ListaArmas = this.ListItem.LookupArma;
    } else {
      this.ListaArmas = [];
    }
    this.Foto = this.ListItem.Personaje_Foto;
  }

  public async updateItem(): Promise<boolean> {
    console.log("Entrando Update");
    let needUpdate = false;
    const item: any = {};

    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }

    if (this.ItemEdit.Usuario?.ID !== this.Usuario?.ID||this.ID===null) {
      item.Personaje_UsuarioId = this.ItemEdit.Usuario?.ID;
      needUpdate = true;
    }

    if (this.ItemEdit.Fuerza !== this.Fuerza||this.ID===null) {
      item.Caracteristica_Fuerza = this.ItemEdit.Fuerza;

      //item.Bono_Fuerza = calcularBono(this.ItemEdit.Fuerza);
      needUpdate = true;
    }

    if (this.ItemEdit.Destreza !== this.Destreza||this.ID===null) {
      item.Caracteristica_Destreza = this.ItemEdit.Destreza;
      //item.Bono_Destreza = calcularBono(this.ItemEdit.Destreza);
      needUpdate = true;
    }

    if (this.ItemEdit.Constitucion !== this.Constitucion||this.ID===null) {
      item.Caracteristica_Constitucion = this.ItemEdit.Constitucion;
      //item.Bono_Constitucion = calcularBono(this.ItemEdit.Constitucion);
      needUpdate = true;
    }

    if (this.ItemEdit.Inteligencia !== this.Inteligencia||this.ID===null) {
      item.Caracteristica_Inteligencia = this.ItemEdit.Inteligencia;
      //item.Bono_Inteligencia = calcularBono(this.ItemEdit.Inteligencia);
      needUpdate = true;
    }

    if (this.ItemEdit.Sabiduria !== this.Sabiduria||this.ID===null) {
      item.Caracteristica_Sabiduria = this.ItemEdit.Sabiduria;
      //item.Bono_Sabiduria = calcularBono(this.ItemEdit.Sabiduria);
      needUpdate = true;
    }

    if (this.ItemEdit.Carisma !== this.Carisma||this.ID===null) {
      item.Caracteristica_Carisma = this.ItemEdit.Carisma;
      //item.Bono_Carisma = calcularBono(this.ItemEdit.Carisma);
      needUpdate = true;
    }

    if (this.ItemEdit.Competencia !== this.Competencia||this.ID===null) {
      item.Bono_Competencia = this.ItemEdit.Competencia;
      needUpdate = true;
    }

    if (this.ItemEdit.Campaña?.ID !== this.Campaña?.ID) {
        item.LookupCampanhaId = this.ItemEdit.Campaña.ID;
        needUpdate = true;
      
    }

    if (this.ItemEdit.Foto?.Url !== this.Foto?.Url) {
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
      console.log("Creando personaje");
      console.log(item);
      await this.Lista.List.items.add(item);
      console.log("Personaje creada");
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

  public async deletePersonaje(): Promise<void> {
    try {
      await this.Lista.List.items.getById(this.ID).delete();
      console.log(`Personaje con ID ${this.ID} eliminado exitosamente.`);
    } catch (error) {
      console.error("Error al eliminar el Personaje:", error);
      throw new Error("Error al eliminar el Personaje");
    }
  }
}
function calcularBono(caracteristica: number): number {
  const bono = (caracteristica - 10) / 2;
  return Math.floor(bono);
}

/* eslint-enable */
