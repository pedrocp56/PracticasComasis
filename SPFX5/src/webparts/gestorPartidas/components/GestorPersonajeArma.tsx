/* eslint-disable @typescript-eslint/no-floating-promises*/
import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from "react";
import { useEffect, useState } from "react";
import PersonajeArmaNuevoBoton from "../../../Entidades/PersonajeArma/Componentes/BotonNuevo";
import PersonajeArmaTabla from "../../../Entidades/PersonajeArma/Componentes/PersonajeArmaTabla";
import { PersonajeArmaItem } from "../../../Entidades/PersonajeArma/PersonajeArmaItem";
import { PersonajeArmaLista } from "../../../Entidades/PersonajeArma/PersonajeArmaLista";

export interface IGestorPersonajeArmaCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorPersonajeArmaCompWebpart(
  props: IGestorPersonajeArmaCompWebpartProps
): JSX.Element {
  const [cargando, setCargando] = useState(true);
  const [Items, setItems] = React.useState<PersonajeArmaItem[]>([]);
  const PersonajeArmaL = React.useRef<PersonajeArmaLista>(null);
  const recargaDatos = async (): Promise<void> => {
    await PersonajeArmaL.current.CargarTodos().then((i) => {
      setItems(i);
    });
    //console.log(Items);
  };
  useEffect((): void => {
    PersonajeArmaL.current = new PersonajeArmaLista(props.SP.web, props.WebPartContext);
    PersonajeArmaL.current.CargarTodos().then((i) => {
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
        <PersonajeArmaNuevoBoton
          lista={PersonajeArmaL.current}
          callback={recargaDatos}
        />
        <PersonajeArmaTabla Items={Items} callback={recargaDatos} />
      </div>
    </>
  );
}
/* eslint-enable */
