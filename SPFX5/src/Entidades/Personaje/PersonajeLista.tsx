/* eslint-disable @typescript-eslint/no-explicit-any*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IItem, IWeb } from "@pnp/sp/presets/all";
import { PersonajeItem } from "./PersonajeItem";
import "@pnp/sp/presets/all";
import "@pnp/sp/lists";

export class PersonajeLista {
  public NombreLista = "Personajes";
  public SelectAllFields: string[] = [
    "*",
    "Personaje_Usuario/Title",
    "Personaje_Usuario/ID",
    "Personaje_Usuario/EMail",
    "LookupArma/Title",
    "LookupCampanha/Title",
    //"LookupArma/Foto",   no vaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa llama a otra biblioteca
  ];
  public ExpandAllFields: string[] = ["Personaje_Usuario", "LookupArma","LookupCampanha"];
  public web: IWeb;
  public Context: WebPartContext;
  public List: IList;

  constructor(web: IWeb, context: WebPartContext) {
    this.web = web;
    this.Context = context;
    this.List = this.web.lists.getByTitle(this.NombreLista);
  }

  public getNewPersonaje(): PersonajeItem {
    const nuevo = new PersonajeItem(null, this);
    nuevo.ID = null;
    //nuevo.Usuario =;
    nuevo.Fuerza = 10;
    nuevo.Destreza = 10;
    nuevo.Constitucion = 10;
    nuevo.Inteligencia = 10;
    nuevo.Sabiduria = 10;
    nuevo.Carisma = 10;
    nuevo.Competencia = 2;
    nuevo.Foto = null;
    return nuevo;
  }

  public async CargarTodos(BatchedWeb?: IWeb): Promise<PersonajeItem[]> {
    const Items = this.List.items
      .expand(this.ExpandAllFields.join())
      .orderBy("Title")
      .select(this.SelectAllFields.join())()
      .then((Data: any) => {
        return Data.map((I: IItem) => {
          return new PersonajeItem(I, this);
        });
      })
      .catch(async (E: Error) => {
        console.error(E);
      });

    return await Items;
  }
}
/* eslint-enable */
