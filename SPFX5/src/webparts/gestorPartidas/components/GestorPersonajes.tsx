/* eslint-disable @typescript-eslint/no-floating-promises*/
import * as React from 'react';
import { Spinner } from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import { useEffect, useState } from "react";
import { PersonajeItem } from '../../../Entidades/Personaje/PersonajeItem';
import { PersonajeLista } from '../../../Entidades/Personaje/PersonajeLista';

export interface IGestorPesonajesCompWebpartProps {
    SP: SPFI;
    WebPartContext: WebPartContext;
}

export default function GestorPesonajesCompWebpart(
    props: IGestorPesonajesCompWebpartProps
): JSX.Element {
    const [cargando, setCargando] = useState(true);
    const [Items, setItems] = React.useState<PersonajeItem[]>([]);
    const PesonajeL = React.useRef<PersonajeLista>(null);

    /*
    const recargaDatos = async (): Promise<void> => {
        
        await PesonajeL.current.CargarTodos().then((i) => {
            setItems(i);
        });
        //console.log(Items);
    }
*/
    useEffect((): void => {
        PesonajeL.current = new PersonajeLista(props.SP.web, props.WebPartContext);
        PesonajeL.current.CargarTodos().then((i) => {
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
                {Items}
            </div>
        </>
    );
}
/* eslint-enable */
