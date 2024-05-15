/* eslint-disable @typescript-eslint/no-floating-promises*/
import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { useEffect, useState } from "react";
import { CampañaItem } from "../../../Entidades/Campaña/CampañaItem";
import { CampañaLista } from "../../../Entidades/Campaña/CampañaLista";
import CampañaTabla from "../../../Entidades/Campaña/Componentes/CampañaTabla";
import CampañaNuevoBoton from "../../../Entidades/Campaña/Componentes/BotonNuevo";

export interface IGestorCampañasCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorCampañasCompWebpart(
  props: IGestorCampañasCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const [Items, setItems] = React.useState<CampañaItem[]>([]);
  const CampañaL = React.useRef<CampañaLista>(null);
  const recargaDatos = async (): Promise<void> => {
    await CampañaL.current.CargarTodos().then((i) => {
      setItems(i);
    });
  };
  useEffect((): void => {
    CampañaL.current = new CampañaLista(props.SP.web, props.WebPartContext);
    CampañaL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });

    setTimeout(() => {
      setCargando(false);
      if (!cargando) console.log("Cargado");
    }, 2000);
  }, []);

  return (
    <>
      <div>
        <Spinner hidden={!cargando} />
      </div>
      <div hidden={cargando}>
        <CampañaNuevoBoton lista={CampañaL.current} callback={recargaDatos} />
        <CampañaTabla Items={Items} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */
