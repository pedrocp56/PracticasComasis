/* eslint-disable @typescript-eslint/no-explicit-any*/
import { isValidUrl } from "../Generales/Validaciones";
import { PersonajeLista } from "./PersonajeLista";

interface ComasisUser {
  Title: string;
  ID: number;
  EMail: string;
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
  public Campaña: string;
  public ListaArmas: any[];
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
    this.Usuario = this.ListItem.Personaje_Usuario
    this.UsuarioNombre =
      this.Usuario !== undefined && this.Usuario !== null
        ? this.Usuario["Title"]
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
    this.Campaña = this.ListItem.Campanha;
    console.log(this.ListItem.LookupArma);
    this.ListaArmas = this.ListItem.LookupArma;
    this.Foto = this.ListItem.Personaje_Foto;

  }

  public async updateItem(): Promise<boolean> {
    let needUpdate = false;
    const item: any = {};
    if (this.ItemEdit.Nombre !== this.Nombre) {
      item.Title = this.ItemEdit.Nombre;
      needUpdate = true;
    }
    if (this.ItemEdit.Usuario !== this.Usuario) {
      item.Personaje_Usuario = this.ItemEdit.Usuario;
      needUpdate = true;
    }

    if (this.ItemEdit.Fuerza !== this.Fuerza) {
      item.Caracteristica_Fuerza = this.ItemEdit.Fuerza;
      needUpdate = true;
    }
    if (this.ItemEdit.Destreza !== this.Destreza) {
      item.Caracteristica_Destreza = this.ItemEdit.Destreza;
      needUpdate = true;
    }
    if (this.ItemEdit.Constitucion !== this.Constitucion) {
      item.Caracteristica_Constitucion = this.ItemEdit.Constitucion;
      needUpdate = true;
    }
    if (this.ItemEdit.Inteligencia !== this.Inteligencia) {
      item.Caracteristica_Inteligencia = this.ItemEdit.Inteligencia;
      needUpdate = true;
    }
    if (this.ItemEdit.Sabiduria !== this.Sabiduria) {
      item.Caracteristica_Sabiduria = this.ItemEdit.Sabiduria;
      needUpdate = true;
    }
    if (this.ItemEdit.Carisma !== this.Carisma) {
      item.Caracteristica_Carisma = this.ItemEdit.Carisma;
      needUpdate = true;
    }
    if (this.ItemEdit.Competencia !== this.Competencia) {
      item.Bono_Competencia = this.ItemEdit.Competencia;
      needUpdate = true;
    }
    if (this.ItemEdit.Campaña !== this.Campaña) {
      item.Campanha = this.ItemEdit.Campaña;
      needUpdate = true;
    }

    if (this.ItemEdit.Foto !== this.Foto?.Url) {
      if (
        isValidUrl(this.ItemEdit.Foto?.Url) ||
        this.ItemEdit.Foto?.Url === ""
      ) {
        item.Arma_Foto = { Url: this.ItemEdit.Foto?.Url };
        needUpdate = true;
      } else {
        console.log("La URL de la imagen no es válida");
      }
      
    }
    if (this.ID === null) {
      await this.Lista.List.items.add(item);
      console.log("Personaje creada")
      return true
    }
    if (needUpdate) {
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
      console.error('Error al eliminar el Personaje:', error);
      throw new Error('Error al eliminar el Personaje');
    }
  }


}
function calcularBono(caracteristica: number) {
  const bono = (caracteristica - 10) / 2;
  return Math.floor(bono);
}


/* eslint-enable */
