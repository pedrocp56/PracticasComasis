import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from 'react';
import { PersonajeLista } from "../../../Entidades/Personaje/PersonajeLista";

export interface IGestorPersonajesWebPartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorPersonajesWebPart(
  props: IGestorPersonajesWebPartProps
): JSX.Element{
  const[cargando,setCargando] = React.useState(true);
  const lista = React.useRef<PersonajeLista>();

  React.useEffect(() => {
    lista.current = new PersonajeLista(props.SP.web, props.WebPartContext);
    lista.current.CargarTodos().then((Items) => {
      console.log(Items);
    });
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, []);


  return(
    <>
      <div>
        <Spinner hidden={!cargando} />
      </div>
      <div hidden={cargando}>
        <h1>Ejemplo Webpart</h1>
        <p>Este es un ejemplo de webpart</p>
        <p>
          Estamos en el sitio {props.WebPartContext.pageContext.web.absoluteUrl}
        </p>
      </div>
    </>
  );
}
