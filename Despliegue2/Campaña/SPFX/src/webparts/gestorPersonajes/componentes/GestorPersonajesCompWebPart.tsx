import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { ArmaLista } from "../../../Entidades/Arma/ArmaLista";
import { useEffect, useState } from "react";
import ArmaTabla from "../../../Entidades/Arma/Componentes/ArmaTabla";
import { ArmaItem } from "../../../Entidades/Arma/ArmaItem";

export interface IGestorPersonajesCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorPersonajesCompWebpart(
  props: IGestorPersonajesCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const [Items, setItems] = React.useState<ArmaItem[]>([]);
  const ArmaL = React.useRef<ArmaLista>(new ArmaLista(props.SP.web, props.WebPartContext));

  useEffect(():void => {
    ArmaL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });
    console.log(Items);

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
        <h1>Mis armas Webpart</h1>

        <ArmaTabla Items={Items}/>
      </div>
    </>
  );
}