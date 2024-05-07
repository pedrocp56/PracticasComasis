/* eslint-disable @typescript-eslint/no-explicit-any*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IList } from "@pnp/sp/lists";
import { IItem, IWeb } from "@pnp/sp/presets/all";
import { CampañaItem } from "./CampañaItem";

export class CampañaLista {
  public NombreLista = "Campanhas";
  public SelectAllFields: string[] = ["*"];
  public ExpandAllFields: string[] = [];
  public web: IWeb;
  public Context: WebPartContext;
  public List: IList;

  constructor(web: IWeb, context: WebPartContext) {
    this.web = web;
    this.Context = context;
    this.List = this.web.lists.getByTitle(this.NombreLista);
  }

  public getNewCampaña(): CampañaItem {
    const nuevo = new CampañaItem(null, this);
    nuevo.ID = null;
    nuevo.Fecha = null;
    //nuevo.Usuario =;
    return nuevo;
  }

  public async CargarTodos(BatchedWeb?: IWeb): Promise<CampañaItem[]> {
    const Items = this.List.items
      .expand(this.ExpandAllFields.join())
      .orderBy("Title")
      .select(this.SelectAllFields.join())()
      .then((Data: any) => {
        return Data.map((I: IItem) => {
          return new CampañaItem(I, this);
        });
      })
      .catch(async (E: Error) => {
        console.error(E);
      });

    return await Items;
  }

  public async buscarCampañaPorId(id: number): Promise<CampañaItem | null> {
    try {
      const itemData = await this.List.items.getById(id).select(...this.SelectAllFields);
      if (itemData) {
        return new CampañaItem(itemData, this);
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }



}
/* eslint-enable */