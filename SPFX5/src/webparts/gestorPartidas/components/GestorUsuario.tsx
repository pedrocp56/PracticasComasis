/* eslint-disable @typescript-eslint/no-floating-promises*/
import * as React from 'react';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import UsuarioTabla from '../../../Entidades/Usuario/UsuarioTabla';


export interface IUsuarioCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorUsuarioCompWebpart(
  props: IUsuarioCompWebpartProps
): JSX.Element {


  return (
    <>
      <div >
        <UsuarioTabla context={props.WebPartContext}/>
      </div>
    </>
  );
}
/* eslint-enable */
