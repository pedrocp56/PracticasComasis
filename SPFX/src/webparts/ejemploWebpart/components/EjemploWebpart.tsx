import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { EjemplosLista } from "../../../Entidades/Ejemplos/EjemplosLista";

export interface IEjemploWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function EjemploWebpart(
  props: IEjemploWebpartProps
): JSX.Element {
  const [cargando, setCargando] = React.useState(true);
  const lista = React.useRef<EjemplosLista>(null);

  React.useEffect(() => {
    lista.current = new EjemplosLista(props.SP.web, props.WebPartContext);
    lista.current.CargarTodos().then((Items) => {
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
