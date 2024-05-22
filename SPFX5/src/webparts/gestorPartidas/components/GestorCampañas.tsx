/* eslint-disable @typescript-eslint/no-floating-promises*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { useEffect } from "react";
import { CampañaItem } from "../../../Entidades/Campaña/CampañaItem";
import { CampañaLista } from "../../../Entidades/Campaña/CampañaLista";
import CampañaNuevoBoton from "../../../Entidades/Campaña/Componentes/BotonNuevo";
import CampañaTabla from "../../../Entidades/Campaña/Componentes/CampañaTabla";
import { PersonajeLista } from "../../../Entidades/Personaje/PersonajeLista";

export interface IGestorCampañasCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorCampañasCompWebpart(
  props: IGestorCampañasCompWebpartProps
): JSX.Element {
  const [Items, setItems] = React.useState<CampañaItem[]>([]);
  const CampañaL = React.useRef<CampañaLista>(null);
  const PersonajeL = React.useRef<PersonajeLista>(null);
  const recargaDatos = async (): Promise<void> => {
    await CampañaL.current.CargarTodos().then((i) => {
      setItems(i);
    });
  };
  useEffect((): void => {
    CampañaL.current = new CampañaLista(props.SP.web, props.WebPartContext);
    PersonajeL.current = new PersonajeLista(props.SP.web, props.WebPartContext);
    CampañaL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });
  }, []);

  return (
    <>
      <div>
        <CampañaNuevoBoton lista={CampañaL.current} callback={recargaDatos} />
        <CampañaTabla Items={Items} listaPer={PersonajeL.current} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */
