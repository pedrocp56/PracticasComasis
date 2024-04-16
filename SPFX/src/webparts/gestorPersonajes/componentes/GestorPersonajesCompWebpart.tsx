import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { ArmaLista } from "../../../Entidades/Arma/ArmaLista";
import { useEffect, useRef, useState } from "react";

export interface IGestorPersonajesCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorPersonajesCompWebpart(
  props: IGestorPersonajesCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const ArmaL = useRef<ArmaLista>(new ArmaLista(props.SP.web, props.WebPartContext));

  useEffect(() => {
    ArmaL.current.CargarTodos().then((Items) => {
      console.log(Items);
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
        <h1>Ejemplo Webpart</h1>

        <p>Este es un ejemplo de webpart primer ejemplo</p>
        <p>
          Estamos en el sitio {props.WebPartContext.pageContext.web.absoluteUrl}
        </p>
      </div>
    </>
  );
}