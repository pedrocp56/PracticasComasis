/* eslint-disable @typescript-eslint/no-floating-promises*/
import * as React from 'react';
import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import { ArmaLista } from "../../../Entidades/ArmaMal/ArmaLista";
import { useEffect, useState } from "react";
import ArmaTabla from "../../../Entidades/ArmaMal/Componentes/ArmaTabla";
import { ArmaItem } from "../../../Entidades/ArmaMal/ArmaItem";
import ArmaNuevaBoton from '../../../Entidades/ArmaMal/Componentes/ArmaNuevaBoton';

export interface IGestorArmasCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorArmasCompWebpart(
  props: IGestorArmasCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const [Items, setItems] = React.useState<ArmaItem[]>([]);
  const ArmaL = React.useRef<ArmaLista>(new ArmaLista(props.SP.web, props.WebPartContext));

  const recargaDatos = async (): Promise<void> => {
    await ArmaL.current.CargarTodos().then((i) => {
      setItems(i);
    });
    //console.log(Items);
  }

  useEffect((): void => {
    ArmaL.current.CargarTodos().then((i) => {
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

        <ArmaNuevaBoton lista={ArmaL.current} callback={recargaDatos} />
        <ArmaTabla Items={Items} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */
