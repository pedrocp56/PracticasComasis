/* eslint-disable @typescript-eslint/no-floating-promises */
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from 'react';
import { useEffect } from "react";
import { ArmaLista } from "../../../Entidades/Arma/ArmaLista";
import { ArmaItem } from "../../../Entidades/Arma/ArmaItem";
import MiRuletaWP from "../../../Entidades/Ruleta/MiRuleta";

export interface IRuletaCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorRuletaCompWebpart(
  props: IRuletaCompWebpartProps
): JSX.Element {
  const [Armas, setArmas] = React.useState<ArmaItem[]>([]);
  const ArmaL = React.useRef<ArmaLista>(null);

  const recargaDatos = async (): Promise<void> => {
    await ArmaL.current.CargarTodos(props.WebPartContext.pageContext.legacyPageContext.userId).then((i) => {
      setArmas(i);
    });
  };

  useEffect((): void => {
    ArmaL.current = new ArmaLista(props.SP.web, props.WebPartContext);
    recargaDatos();
  }, []);

  return (
    <>
      <br />
      <MiRuletaWP armas={Armas} />
    </>
  );
}
/* eslint-enable */
