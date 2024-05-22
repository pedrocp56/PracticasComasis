/* eslint-disable @typescript-eslint/no-floating-promises*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { useEffect, useState } from "react";
import PersonajeNuevoBoton from "../../../Entidades/Personaje/Componentes/BotonNuevo";
import PersonajeTabla from "../../../Entidades/Personaje/Componentes/PersonajeTabla";
import { PersonajeItem } from "../../../Entidades/Personaje/PersonajeItem";
import { PersonajeLista } from "../../../Entidades/Personaje/PersonajeLista";

export interface IGestorPersonajesCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorPersonajesCompWebpart(
  props: IGestorPersonajesCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const [Items, setItems] = React.useState<PersonajeItem[]>([]);
  const PersonajeL = React.useRef<PersonajeLista>(null);
  const recargaDatos = async (): Promise<void> => {
    await PersonajeL.current.CargarTodos().then((i) => {
      setItems(i);
    });
  };
  useEffect((): void => {
    PersonajeL.current = new PersonajeLista(props.SP.web, props.WebPartContext);
    PersonajeL.current.CargarTodos().then((i) => {
      console.log(i);
      setItems(i);
    });

    setCargando(false);

  }, []);

  return (
    <>
      <div hidden={cargando}>
        <PersonajeNuevoBoton
          lista={PersonajeL.current}
          callback={recargaDatos}
        />
        <PersonajeTabla Items={Items} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */
