import { PersonajeLista } from "./PersonajeLista";
import { IItem } from "@pnp/sp/items";

export class PersonajeItem {
  public ListItem: any;
  public Lista: PersonajeLista;
  public ItemEdit: PersonajeItem;

  public Nombre: string;
  public Jugador: any;
  public Clase: string;
  public Nivel: number;
  public Raza: string;
  public Alinamiento: string;
  public Estado: string;
  public Edad: number;
  public Altura: number;
  public Peso: number;
  public Ojos: string;
  public Piel: string;
  public Pelo: string;
  public Foto: any;

  constructor(ListItem: IItem, Lista: PersonajeLista) {
    this.ListItem = ListItem;
    this.Lista = Lista;
  }

  public MapearCampos() {
    this.Nombre = this.ListItem.Personaje_Nombre;
    this.Jugador = this.ListItem.Personaje_Usuario;
    this.Clase = this.ListItem.Personaje_Clase;
    this.Nivel = this.ListItem.Personaje_Nivel;
    this.Raza = this.ListItem.Personaje_Raza;
    this.Alinamiento = this.ListItem.Personaje_Alinamiento;
    this.Estado = this.ListItem.Personaje_Estado;
    this.Edad = this.ListItem.Personaje_Edad;
    this.Altura = this.ListItem.Personaje_Altura;
    this.Peso = this.ListItem.Personaje_Peso;
    this.Ojos = this.ListItem.Personaje_Ojos;
    this.Piel = this.ListItem.Personaje_Piel;
    this.Pelo = this.ListItem.Personaje_Pelo;
    this.Foto = this.ListItem.Personaje_Foto;
  }
}
