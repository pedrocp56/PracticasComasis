/* eslint-disable @typescript-eslint/no-explicit-any*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IItem, IWeb } from "@pnp/sp/presets/all";
import { PersonajeArmaItem } from "./PersonajeArmaItem";
import "@pnp/sp/presets/all";
import "@pnp/sp/lists";

export class PersonajeArmaLista {
  public NombreLista = "PersonajeArmas";
  public SelectAllFields: string[] = [
    "*",
    "LookupPersonaje/ID",
    "LookupPersonaje/Title",
    "LookupPersonaje/Caracteristica_Fuerza",
    "LookupPersonaje/Caracteristica_Destreza",
    "LookupPersonaje/Caracteristica_Constitucion",
    "LookupPersonaje/Caracteristica_Inteligencia",
    "LookupPersonaje/Caracteristica_Sabiduria",
    "LookupPersonaje/Caracteristica_Carisma",
    "LookupPersonaje/Bono_Competencia",
    "LookupArma/ID",
    "LookupArma/Title",
    "LookupArma/Arma_Ataque",
    "LookupArma/Arma_Danho",
    "LookupArma/Arma_Car",
    
  ];
  /*
  Se puede leer toda la lista de armas y con el id cagar todo el ArmaItem
    "LookupArma/Arma_Tipo",
    "LookupArma/Arma_Arrojadiza",
    "LookupArma/Arma_Caracteristicas",
  */
  public ExpandAllFields: string[] = ["LookupPersonaje", "LookupArma"];
  public web: IWeb;
  public Context: WebPartContext;
  public List: IList;


  constructor(web: IWeb, context: WebPartContext) {
    this.web = web;
    this.Context = context;
    this.List = this.web.lists.getByTitle(this.NombreLista);
  }

  public getNewPersonajeArma(): PersonajeArmaItem {
    const nuevo = new PersonajeArmaItem(null, this);
    nuevo.ID = null;
    nuevo.Competencia = false;
    nuevo.Bonificacion = 0;
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    return nuevo;
  }

  public async CargarTodos(BatchedWeb?: IWeb): Promise<PersonajeArmaItem[]> {
    const Items = this.List.items
      .expand(this.ExpandAllFields.join())
      .orderBy("Title")
      .select(this.SelectAllFields.join())()
      .then((Data: any) => {
        return Data.map((I: IItem) => {
          return new PersonajeArmaItem(I, this);
        });
      })
      .catch(async (E: Error) => {
        console.error(E);
      });

    return await Items;
  }

  public async CargarArmasDePersonaje(personajeID: number, BatchedWeb?: IWeb): Promise<PersonajeArmaItem[]> {
    const Items = this.List.items
      .expand(this.ExpandAllFields.join())
      .orderBy("Title")
      .filter(`LookupPersonaje/ID eq ${personajeID}`)
      .select(this.SelectAllFields.join())()
      .then((Data: any) => {
        return Data.map((I: IItem) => {
          return new PersonajeArmaItem(I, this);
        });
      })
      .catch(async (E: Error) => {
        console.error(E);
      });

    return await Items;
  }
}
/* eslint-enable */
