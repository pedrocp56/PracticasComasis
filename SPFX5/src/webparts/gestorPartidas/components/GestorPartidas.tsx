/* eslint-disable @typescript-eslint/no-floating-promises*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from 'react';
import { useEffect, useState } from "react";
import { ArmaItem } from "../../../Entidades/ArmaMal/ArmaItem";
import { ArmaLista } from "../../../Entidades/ArmaMal/ArmaLista";
import ArmaTabla from "../../../Entidades/ArmaMal/Componentes/ArmaTabla";

export interface IGestorPartidasCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorPartidasCompWebpart(
  props: IGestorPartidasCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const [Items, setItems] = React.useState<ArmaItem[]>([]);
  const ArmaL = React.useRef<ArmaLista>(new ArmaLista(props.SP.web, props.WebPartContext));

  const recargaDatos = async ():Promise<void>  => {
    await ArmaL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });
  }

  useEffect((): void => {
    ArmaL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });

      setCargando(false);

  }, []);

  return (
    <>
      <div hidden={cargando}>
        <ArmaTabla Items={Items} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */