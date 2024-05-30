/* eslint-disable @typescript-eslint/no-floating-promises*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from 'react';
import { useEffect, useState } from "react";
import { ArmaItem } from '../../../Entidades/Arma/ArmaItem';
import { ArmaLista } from '../../../Entidades/Arma/ArmaLista';
import ArmaTabla from '../../../Entidades/Arma/Componentes/ArmaTabla';
import ArmaNuevoBoton from '../../../Entidades/Arma/Componentes/BotonNuevo';

export interface IGestorArmasCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorArmasCompWebpart(
  props: IGestorArmasCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(false);
  const [Items, setItems] = React.useState<ArmaItem[]>([]);
  const ArmaL = React.useRef<ArmaLista>(new ArmaLista(props.SP.web, props.WebPartContext));

  const recargaDatos = async (): Promise<void> => {
    await ArmaL.current.CargarTodos().then((i) => {
      console.log("Recargando datos");
      setItems(i);
    });
  }

  useEffect((): void => {
    ArmaL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });
    setCargando(false);
    if (!cargando) console.log("Cargado");
  }, []);

  return (
    <>
      <div hidden={cargando} >
        <ArmaNuevoBoton lista={ArmaL.current} callback={recargaDatos} />
        <ArmaTabla Items={Items} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */
