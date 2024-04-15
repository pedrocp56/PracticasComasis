import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IItem, IWeb } from "@pnp/sp/presets/all";
import { PersonajeItem } from "./PersonajeItem";

export class PersonajeLista {
  public NombreLista = "Personaje";
  public SelectAllFields: string[] = [
    "*",
    "Personaje_Usuario/Title",
  ];
  public ExpandAllFields: string[] = ["Personaje_Usuario"];
  public web: IWeb;
  public Context: WebPartContext;
  public List: IList;

  constructor(web: IWeb, context: WebPartContext) {
    this.web = web;
    this.Context = context;
    this.List = this.web.lists.getByTitle(this.NombreLista);
  }

  public async CargarTodos(BatchedWeb?: IWeb): Promise<PersonajeItem[] | void> {
    const Items = this.List.items
      .expand(this.ExpandAllFields.join())
      .orderBy("Title")
      .select(this.SelectAllFields.join())()
      .then((Data: IItem[]) => {
        return Data.map((I) => {
          return new PersonajeItem(I, this);
        });
      })
      .catch(async (E: Error) => {
        console.error(E);
      });

    return await Items;
  }
}