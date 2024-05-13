/* eslint-disable @typescript-eslint/no-explicit-any*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IItem, IWeb } from "@pnp/sp/presets/all";
import { ArmaItem } from "./ArmaItem";
import "@pnp/sp/presets/all";
import "@pnp/sp/lists";


export class ArmaLista {
  public NombreLista = "Armas";
  public SelectAllFields: string[] = [
    "*",
    "LookupArmaFoto/ID",
    "LookupArmaFoto/Title",
  ];
  public ExpandAllFields: string[] = ["LookupArmaFoto"];
  public web: IWeb;
  public Context: WebPartContext;
  public List: IList;

  constructor(web: IWeb, context: WebPartContext) {
    this.web = web;
    this.Context = context;
    this.List = this.web.lists.getByTitle(this.NombreLista);
  }

  public getNewArma(): ArmaItem {
    const nuevo = new ArmaItem(null, this);
    nuevo.ID = null;
    nuevo.Ataque = 1;
    nuevo.Danho = "1d8";
    nuevo.Tipo = "Cortante";
    nuevo.Arrojadiza = false;
    nuevo.Car = "Fuerza";
    nuevo.Foto = null;
    return nuevo;
  }

  public async CargarTodos(BatchedWeb?: IWeb): Promise<ArmaItem[]> {
    const Items = this.List.items
      .expand(this.ExpandAllFields.join())
      .orderBy("Title")
      .select(this.SelectAllFields.join())()
      .then((Data: any) => {
        return Data.map((I: IItem) => {
          return new ArmaItem(I, this);
        });
      })
      .catch(async (E: Error) => {
        console.error(E);
      });

    return await Items;
  }
}
/* eslint-enable */
