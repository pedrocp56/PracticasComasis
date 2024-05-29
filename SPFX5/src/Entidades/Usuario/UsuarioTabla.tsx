/* eslint-disable @typescript-eslint/no-floating-promises,@typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type*/

import { WebPartContext } from "@microsoft/sp-webpart-base";
import { DefaultButton, Persona, Stack } from "office-ui-fabric-react";
import * as React from "react";
import { useState } from "react";

export interface IUsuarioTablaProps {
    context: WebPartContext;
    MCampaña: () => void;
    MPersonaje: () => void;
    MArma: () => void;
}

export default function UsuarioTabla(
    Props: IUsuarioTablaProps
): JSX.Element {
    const [MostrarPersonajes, setMostrarPersonajes] = useState(false);
    const [MostrarCampañas, setMostrarCampañas] = useState(false);
    const [MostrarArmas, setMostrarArmas] = useState(false);


    const mostrarCampaña = (): void => {
        setMostrarCampañas(true);
        setMostrarPersonajes(false);
        setMostrarArmas(false);
        Props.MCampaña();
    };

    const mostrarPersonaje = (): void => {
        setMostrarCampañas(false);
        setMostrarPersonajes(true);
        setMostrarArmas(false);
        Props.MPersonaje();
    };
    const mostrarArma = (): void => {
        setMostrarCampañas(false);
        setMostrarPersonajes(false);
        setMostrarArmas(true);
        Props.MArma();
    };

    return (
        <Stack horizontalAlign="center" verticalAlign="center" tokens={{ childrenGap: 35 }} styles={{ root: { width: '500px' } }}>
            <div className="borde-user">
                <Persona
                    imageShouldFadeIn={false}
                    imageUrl={`/_layouts/15/userphoto.aspx?size=L&username=${Props.context.pageContext.legacyPageContext.userEmail}`}
                    text={Props.context.pageContext.legacyPageContext.userDisplayName}
                />
                <Stack id="caja-2x2">
                    <DefaultButton
                        id={MostrarCampañas ? "botonUserPulsado" : "botonUserSinPulsar"}
                        className="celda"
                        onClick={mostrarCampaña}
                        text="Campaña"
                    />
                    <DefaultButton
                        id={MostrarPersonajes ? "botonUserPulsado" : "botonUserSinPulsar"}
                        className="celda"
                        onClick={mostrarPersonaje}
                        text="Personajes"
                    />
                    <DefaultButton
                        id={MostrarArmas ? "botonUserPulsado" : "botonUserSinPulsar"}
                        className="celda"
                        onClick={mostrarArma}
                        text="Ver armas"
                    />
                </Stack>
            </div>
        </Stack>
    );
}

/* eslint-enable */
